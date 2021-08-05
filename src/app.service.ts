import { Injectable } from '@nestjs/common';
import { LoginDto } from './app.controller';

@Injectable()
export class AppService {
  private x: number;
  constructor() {
    this.x = 10;
  }

  getHello(): string {
    this.x += 20;
    console.log({ x: this.x });
    return 'Hello World!';
  }

  login(body: LoginDto) {
    return body;
  }
}
