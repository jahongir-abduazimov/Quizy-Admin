import { create } from "zustand";
import { SubcategoryStore } from "@interface";
import { subcategory } from "@service";
import Notification from "@notification";

const useCategoryStore = create<SubcategoryStore>((set) => ({
  subcategories: [],
  isLoading: false,
  getSubcategories: async (id) => {
    set({ isLoading: true });
    try {
      const response = await subcategory.get_subcategories(id);
      set({ subcategories: response?.data?.data });
      return response;
    } catch (error: any) {
      console.log(error);
    } finally {
      set({ isLoading: false });
    }
  },
  postSubcategory: async (data) => {
    try {
      const response = await subcategory.post_subcategory(data);
      console.log(response);
      if (response.status === 201) {
        set((state) => ({
          subcategories: [...state.subcategories, response.data.data],
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
  deleteSubcategory: async (id) => {
    try {
      const response = await subcategory.delete_subcategory(id);
      set((state) => ({
        subcategories: state.subcategories.filter((subcategory) => subcategory.id!== id),
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
  editSubcategory: async (id, data) => {
    try {
      const response = await subcategory.edit_subcategory(id, data);
      console.log(response);
      set((state) => ({
        subcategories: state.subcategories.map((subcategory) =>
          subcategory.id === id? {...subcategory,...data} : subcategory
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
