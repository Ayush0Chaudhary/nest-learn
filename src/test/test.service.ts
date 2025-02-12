import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';



@Injectable()
export class TestService {
    constructor(private prismaServices: PrismaService) { }

    async getTests() {
        return this.prismaServices.test.findMany();
    }

    async createTest(teacherEmail: string) {
        const teacher = await this.prismaServices.teacher.findUnique({
            where: {
                email: teacherEmail.toLowerCase()
            }
        });

        return this.prismaServices.test.create({
            data: {
                teacher: {
                    connect: {
                        id: teacher.id
                    }
                },
            },
        });
    }

    /////


    async addQuestiontoTest(question: string, testId: number) {
        console.log(testId);
        return this.prismaServices.test.update({
            where: {
                id: testId
            },
            data: {
                question: {
                    create: {
                        text: question
                    }
                }
            }
        });
    }

    

}