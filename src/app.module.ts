import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

@Module({ //DECORATOR Module-> começam com @
  imports: [UserModule],
  controllers: [AppController],
  providers: [AppService],
  exports: [AppService] //acesso ao meu AppService quem importar o AppModule
})
export class AppModule {}
