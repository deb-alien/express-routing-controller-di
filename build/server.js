"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const app_config_1 = require("./config/app.config");
const main_1 = require("./main");
async function bootstrap() {
    const app = (0, main_1.createApp)();
    const PORT = app_config_1.appConfig.port;
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}
void bootstrap();
