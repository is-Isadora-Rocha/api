import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({ //DECORATOR Module-> começam com @
  imports: [],
  controllers: [AppController],
  providers: [AppService],
  exports: [AppService] //acesso ao meu AppService quem importar o AppModule
})
export class AppModule {}
