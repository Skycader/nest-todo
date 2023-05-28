import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UserRepository extends Repository<User> {
  constructor(
    @InjectRepository(User)
    private repository: Repository<User>,
  ) {
    super(
      repository.target,
      repository.manager,
      repository.queryRunner,
    );
  }

  public async getUsers(): Promise<User[]> {
    const query =
      this.repository.createQueryBuilder('user');

    const users = await query.getMany();

    return users;
  }

  errorHandler(error: any) {
    switch (error.code) {
      case '23505':
        throw new ConflictException(
          'Username already exists',
        );
      default:
        throw new InternalServerErrorException();
    }
  }

  async signUp(
    authCredentialsDto: AuthCredentialsDto,
  ): Promise<void> {
    const { username, password } = authCredentialsDto;

    const salt = await bcrypt.genSalt();
    const user = new User();
    user.username = username;
    user.salt = salt;
    user.password = await this.hashPassword(password, salt);
    // console.log(user.password)
    try {
      await user.save();
    } catch (e) {
      this.errorHandler(e);
    }
  }

  async validateUserPassword(
    authCredentialsDto: AuthCredentialsDto,
  ): Promise<string> {
    const { username, password } = authCredentialsDto;
    const user = await this.findOne({
      where: { username },
    });

    if (user && (await user.validatePassword(password))) {
      return user.username;
    } else {
      return null;
    }
  }

  async hashPassword(
    password: string,
    salt: string,
  ): Promise<string> {
    return await bcrypt.hash(password, salt);
  }
}
