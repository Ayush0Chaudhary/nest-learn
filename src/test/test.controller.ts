import { Body, Controller, Get, Patch, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { TestService } from './test.service';
import { AddQuestiontoTestDto, CreateTestDto } from 'src/dto/create-test.dto';
import { Express } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';

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

    @Post('upload')
    @UseInterceptors(FileInterceptor('file'))
    uploadFile(@UploadedFile() file: Express.Multer.File) {
      console.log(file);
      // TODO: Save file to disk 
    }
}
