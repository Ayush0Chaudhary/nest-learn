import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
import { TestService } from './test.service';
import { AddQuestiontoTestDto, CreateTestDto } from 'src/dto/create-test.dto';
import { QuestionController } from 'src/question/question.controller';

@Controller('api/v1/test')
export class TestController {
    constructor( private testService: TestService ) {}

    @Get()
    getTests() {
        return this.testService.getTests();
    }
    @Post()
    createTest(@Body() createTestDto: CreateTestDto) {
        return this.testService.createTest(createTestDto.teacherEmail);
    }
    
    @Patch()
    addQuestionToTest(@Body() addQuestiontoTestDto: AddQuestiontoTestDto) {
        return this.testService.addQuestiontoTest(addQuestiontoTestDto.question, addQuestiontoTestDto.testId);
    }

    
}
