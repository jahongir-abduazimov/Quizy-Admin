import request from "../config";
import { QuizRequest } from "@interface";
export const quiz: QuizRequest = {
    get_quizzes: (id) => request.get(`/quiz/${id}`),
    post_quiz: (data) => request.post("/quiz", data),
    delete_quiz: (id) => request.delete(`/quiz/${id}`),
    edit_quiz: (id, data) => request.put(`/quiz/${id}`, data)
}