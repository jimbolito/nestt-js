import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';


@Module({

  imports: [
    //Variables de entorno:
    ConfigModule.forRoot({
      // envFilePath: `.${process.NODE_ENV}.env`, 
      envFilePath: '.develop.env', 
      isGlobal: true
    }),
    //Todo se va a manejar en base a las rutas que tiene el UsersModule:
    UsersModule
  ]
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule { }
