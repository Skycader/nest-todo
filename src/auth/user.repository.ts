import { ConflictException, Injectable, InternalServerErrorException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { AuthCredentialsDto } from "./dto/auth-credentials.dto";
import { User } from "./user.entity";

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
        throw new ConflictException('Username already exists')
      default:
        throw new InternalServerErrorException();
    }
  }

  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    const { username, password } = authCredentialsDto;
    const user = new User();
    user.username = username;
    user.password = password;

    try {
      await user.save();
    } catch (e) {
      this.errorHandler(e);
    }
  }
} 
