"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const config_1 = require("@nestjs/config");
const app_module_1 = require("./app.module");
const morgan = require("morgan");
const constants_1 = require("./constants");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(morgan('dev'));
    app.setGlobalPrefix('api');
    const configService = app.get(config_1.ConfigService);
    const port = configService.get('PORT');
    app.enableCors(constants_1.CORS);
    await app.listen(3000);
    console.log(`Application running on " ${await app.getUrl()}`);
}
bootstrap();
//# sourceMappingURL=main.js.map