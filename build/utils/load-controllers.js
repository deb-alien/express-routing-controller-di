"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = loadControllers;
exports.loadMiddlewares = loadMiddlewares;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
function loadControllers(dir) {
    const controllers = [];
    const files = fs_1.default.readdirSync(dir);
    for (const file of files) {
        const fullPath = path_1.default.join(dir, file);
        if (fs_1.default.statSync(fullPath).isDirectory()) {
            controllers.push(...loadControllers(fullPath));
        }
        else if (file.endsWith('.controller.ts') || file.endsWith('.controller.js')) {
            const module = require(fullPath);
            for (const exported of Object.values(module)) {
                if (typeof exported === 'function') {
                    controllers.push(exported);
                }
            }
        }
    }
    return controllers;
}
function loadMiddlewares(dir) {
    const middlewares = [];
    const files = fs_1.default.readdirSync(dir);
    for (const file of files) {
        const fullPath = path_1.default.join(dir, file);
        if (fs_1.default.statSync(fullPath).isDirectory()) {
            middlewares.push(...loadMiddlewares(fullPath));
        }
        else if (file.endsWith('.middleware.ts') || file.endsWith('.middleware.js')) {
            const module = require(fullPath);
            for (const exported of Object.values(module)) {
                if (typeof exported === 'function') {
                    middlewares.push(exported);
                }
            }
        }
    }
    return middlewares;
}
