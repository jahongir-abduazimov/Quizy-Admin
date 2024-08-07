import { create } from "zustand";
import { CategoryStore } from "@interface";
import { category } from "@service";
// import Notification from "@notification";

const useCategoryStore = create<CategoryStore>(() => ({
  categories: [],
  isLoading: false,
  getCategories: async () => {
    // set({ isLoading: true });
    try {
      const response = await category.get_categories();
    //   if (response.status === 200) {
    //     set({
    //       categories: response.data.data.categories,
    //     });
    //   }
    //   set({ isLoading: false });
      return response;
    } catch (error: any) {
    //   set({ isLoading: false });
    //   Notification({
    //     message: error.message,
    //     type: "error",
    //   });
    }
  }
}));

export default useCategoryStore;
