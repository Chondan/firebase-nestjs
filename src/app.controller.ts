import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { IsEmail, IsString } from 'class-validator';
import { AppService } from './app.service';

export class LoginDto {
  @IsString()
  email: string;

  @IsString()
  password: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/login')
  login(@Body(new ValidationPipe()) body: LoginDto) {
    console.log({ body });
    return this.appService.login(body);
  }
}
