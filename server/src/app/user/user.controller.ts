import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { SignupDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('signup')
  signup(@Body() signupDto: SignupDto): any {
    return this.userService.signup(signupDto);
  }

  @Post('login')
  login(@Body() loginDto: LoginDto): any {
    return this.userService.login(loginDto);
  }
}
