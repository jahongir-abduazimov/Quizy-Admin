import { create } from "zustand";
import { CategoryStore } from "@interface";
import { category } from "@service";
import Notification from "@notification";

const useCategoryStore = create<CategoryStore>((set) => ({
  categories: [],
  isLoading: false,
  getCategories: async () => {
    set({ isLoading: true });
    try {
      const response = await category.get_categories();
      set({ categories: response?.data?.data });
      return response;
    } catch (error: any) {
      console.log(error);
    } finally {
      set({ isLoading: false });
    }
  },
  postCategory: async (data: any) => {
    try {
      const response = await category.post_category(data);
      if (response.status === 201) {
        Notification({
          message: "Successfully added!",
          type: "success",
        });
        set((state) => ({
          categories: [...state.categories, response.data.data],
        }));
      }
      return response;
    } catch (error: any) {
      Notification({
        message: "Failed to add!",
        type: "error",
      })
    }
  },
  deleteCategory: async (id: any) => {
    try {
      const response = await category.delete_category(id);
      if (response.status === 201) {
        set((state) => ({
          categories: state.categories.filter((item: any) => item.id != id),
        }));
        Notification({
          type: "success",
          message: "Successfully deleted!",
        })
      }
      return response;
    } catch (error: any) {
      Notification({
        message: "Failed to delete!",
        type: "error",
      })
    }
  },
  editCategory: async (id: any, data: any) => {
    try {
      const response = await category.edit_category(id, data);
      if (response.status === 201) {
        Notification({
          type: "success",
          message: "Successfully updated!",
        });
        set((state) => ({
          categories: state.categories.map((item: any) =>
            item.id === id ? { ...item, ...data } : item
          ),
        }));
      }
      return response;
    } catch (error: any) {
      Notification({
        message: "Failed to update!",
        type: "error",
      })
    }
  },
}));

export default useCategoryStore;
