import { create } from "zustand";
import { QuizStore } from "@interface";
import { quiz } from "@service";
import Notification from "@notification";

const useCategoryStore = create<QuizStore>((set) => ({
  quizzes: [],
  isLoading: false,
  getQuizzes: async (id) => {
    set({ isLoading: true });
    try {
      const response = await quiz.get_quizzes(id);
      console.log(response);
      set({ quizzes: response?.data?.data });
      return response;
    } catch (error: any) {
      console.log(error);
    } finally {
      set({ isLoading: false });
    }
  },
  postQuiz: async (data) => {
    try {
      const response = await quiz.post_quiz(data);
      console.log(response);
      if (response.status === 201) {
        set((state) => ({
          quizzes: [...state.quizzes, response.data.data],
        }));
        Notification({
          type: "success",
          message: "Successfully added!",
        });
      }
      return response;
    } catch (error: any) {
      Notification({
        type: "error",
        message: "Failed to add!",
      })
    }
  },
  deleteQuiz: async (id) => {
    try {
      const response = await quiz.delete_quiz(id);
      set((state) => ({
        quizzes: state.quizzes.filter((quizy) => quizy.id!== id),
      }));
      Notification({
        type: "success",
        message: "Successfully deleted!",
      });
      return response;
    } catch (error: any) {
      Notification({
        type: "error",
        message: "Failed to delete!",
      });
    }
  },
  editQuiz: async (id, data) => {
    try {
      const response = await quiz.edit_quiz(id, data);
      console.log(response);
      set((state) => ({
        quizzes: state.quizzes.map((quizy) =>
          quizy.id === id? {...quizy,...data} : quizy
        ),
      }));
      Notification({
        type: "success",
        message: "Successfully updated!",
      });
    return response;
    } catch (error: any) {
      Notification({
        type: "error",
        message: "Failed to update!",
      });
    }
  }
}));

export default useCategoryStore;
