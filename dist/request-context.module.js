"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestContextModule = void 0;
const common_1 = require("@nestjs/common");
const request_context_middleware_1 = require("./request-context.middleware");
let RequestContextModule = exports.RequestContextModule = class RequestContextModule {
    configure(consumer) {
        consumer.apply(request_context_middleware_1.RequestContextMiddleware).forRoutes('*');
    }
};
exports.RequestContextModule = RequestContextModule = __decorate([
    (0, common_1.Module)({
        providers: [request_context_middleware_1.RequestContextMiddleware],
        exports: [request_context_middleware_1.RequestContextMiddleware],
    })
], RequestContextModule);
//# sourceMappingURL=request-context.module.js.map