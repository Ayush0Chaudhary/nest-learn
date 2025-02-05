import { QuestionsDTO } from "./question";
export interface TeacherDTO {
    id: number;
    email: string;
    name?: string;
    posts: QuestionsDTO[];
}
