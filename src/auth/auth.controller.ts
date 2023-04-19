import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

@Controller('auth')
export class AuthController {

  constructor(
    private authService: AuthService
  ) { }
  @Get('/users')
  getUsers() {
    return this.authService.getUsers();
  }
  @Post('/signup')
  signUp(@Body() authCredentialsDto: AuthCredentialsDto) {
    console.log(this.authService)
    return this.authService.signUp(authCredentialsDto);
  }
}
