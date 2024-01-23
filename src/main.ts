import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import * as morgan from 'morgan';
import { CORS } from './constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //usar morgan con el entorno dev
  app.use(morgan('dev'))

  //Se puede poner el prefijo api o por ejemplo para el control de versiones
  app.setGlobalPrefix('api');

  //Usando variable de entorno para el puerto: 
  const configService = app.get(ConfigService);
  const port = configService.get('PORT');


  //app.enableCors() habilita CORS para todas las rutas de la aplicación.
  app.enableCors(CORS);

  await app.listen(3000);

  //Donde corre la aplición: debe estar primero la linea anterior   await app.listen(3000);
  console.log(`Application running on " ${await app.getUrl()}`)
}
bootstrap();
