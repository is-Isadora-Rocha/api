import { Injectable } from '@nestjs/common';

@Injectable() //pode injetar essa classe em outras classes
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
