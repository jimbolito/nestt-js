import { CorsOptions } from "@nestjs/common/interfaces/external/cors-options.interface";
// También es posible pasar opciones a enableCors() para configurar el comportamiento CORS,
// como permitir ciertos orígenes o encabezados específicos.
export const CORS: CorsOptions = {
    origin:true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials : true
}