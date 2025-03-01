"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const prisma_service_1 = require("../prisma/prisma.service");
const bcrypt = require("bcrypt");
const teacher_service_1 = require("../teacher/teacher.service");
let AuthService = class AuthService {
    constructor(prismaService, jwtService, teacherService) {
        this.prismaService = prismaService;
        this.jwtService = jwtService;
        this.teacherService = teacherService;
    }
    async validateUser(email, password) {
        const student = await this.prismaService.student.findUnique({
            where: {
                email: email
            }
        });
        const teacher = await this.prismaService.teacher.findUnique({
            where: {
                email: email
            }
        });
        if (student && this.verifyPassword(password, student.password)) {
            const payload = { sub: student.id, email: student.email };
            return {
                access_token: await this.jwtService.signAsync(payload),
            };
        }
        else if (teacher && this.verifyPassword(password, teacher.password)) {
            const payload = { sub: teacher.id, email: teacher.email };
            return {
                access_token: await this.jwtService.signAsync(payload),
            };
        }
        else {
            return new common_1.UnauthorizedException();
        }
    }
    async registerUser(email, password, name, type) {
        if (!email || !password || !name) {
            return new common_1.UnauthorizedException();
        }
        const user = await this.prismaService.student.findUnique({
            where: {
                email: email
            }
        });
        const teacher = await this.prismaService.teacher.findUnique({
            where: {
                email: email
            }
        });
        if (user || teacher) {
            return new common_1.UnauthorizedException();
        }
        else {
            const hash = await this.encryptPassword(password);
            var payload;
            if (type == 'teacher') {
                const teacher = await this.prismaService.teacher.create({
                    data: {
                        email: email,
                        password: hash
                    }
                });
                payload = { sub: teacher.id, email: teacher.email };
            }
            else if (type == "student") {
                const student = await this.prismaService.student.create({
                    data: {
                        email: email,
                        password: hash
                    }
                });
                payload = { sub: student.id, email: student.email };
            }
            return {
                access_token: await this.jwtService.signAsync(payload),
            };
        }
    }
    async encryptPassword(password) {
        const saltRounds = 10;
        try {
            const hash = await bcrypt.hash(password, saltRounds);
            return hash;
        }
        catch (err) {
            throw new Error('Error encrypting password: ' + err.message);
        }
    }
    async verifyPassword(password, hash) {
        try {
            const isMatch = await bcrypt.compare(password, hash);
            return isMatch;
        }
        catch (err) {
            throw new Error('Error verifying password: ' + err.message);
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService,
        teacher_service_1.TeacherService])
], AuthService);
//# sourceMappingURL=auth.service.js.map