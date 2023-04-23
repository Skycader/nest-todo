import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { JwtPayload } from './jwt-payload.model';
import { UserRepository } from './user.repository';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private readonly userRepository: UserRepository,
  ) { }

  async getUsers() {
    return this.userRepository.getUsers();
  }
  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    return this.userRepository.signUp(authCredentialsDto)
  }

  async signIn(authCredentialsDto: AuthCredentialsDto): Promise<{ accessToken: string }> {
    const username = await this.userRepository.validateUserPassword(authCredentialsDto);
    if (!username) {
      throw new UnauthorizedException('Invalid credentials')
    }

    const payload: JwtPayload = { username };
    const accessToken = await this.jwtService.signAsync(payload);
    return { accessToken };
  }
}
