"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const prisma_service_1 = require("./prisma/prisma.service");
const teacher_service_1 = require("./teacher/teacher.service");
const teacher_controller_1 = require("./teacher/teacher.controller");
const teacher_module_1 = require("./teacher/teacher.module");
const question_module_1 = require("./question/question.module");
const auth_service_1 = require("./auth/auth.service");
const auth_controller_1 = require("./auth/auth.controller");
const auth_module_1 = require("./auth/auth.module");
const student_module_1 = require("./student/student.module");
const test_module_1 = require("./test/test.module");
const test_controller_1 = require("./test/test.controller");
const test_service_1 = require("./test/test.service");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [teacher_module_1.TeacherModule, question_module_1.QuestionModule, auth_module_1.AuthModule, student_module_1.StudentModule, test_module_1.TestModule],
        controllers: [app_controller_1.AppController, teacher_controller_1.TeacherController, auth_controller_1.AuthController, test_controller_1.TestController],
        providers: [app_service_1.AppService, prisma_service_1.PrismaService, teacher_service_1.TeacherService, auth_service_1.AuthService, test_service_1.TestService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map