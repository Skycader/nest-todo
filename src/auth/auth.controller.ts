import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { GetUser } from './get-user.decorator';
import { User } from './user.entity';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Get('/users')
  getUsers() {
    return this.authService.getUsers();
  }
  @Post('/signup')
  signUp(
    @Body(ValidationPipe)
    authCredentialsDto: AuthCredentialsDto,
  ) {
    console.log(this.authService);
    return this.authService.signUp(authCredentialsDto);
  }

  @Post('/signin')
  signIn(
    @Body(ValidationPipe)
    authCredentialsDto: AuthCredentialsDto,
  ): Promise<{ accessToken: string }> {
    return this.authService.signIn(authCredentialsDto);
  }

  @Post('/test')
  @UseGuards(AuthGuard())
  test(@Req() req, @GetUser() user: User) {
    console.log(user);
  }
}
