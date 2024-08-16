import request from "../config";
import { CategoryRequest } from "@interface";

export const category: CategoryRequest = {
  get_categories: () => request.get("/category"),
  post_category: (data) => request.post("/category", data),
  delete_category: (id) => request.delete(`/category/${id}`),
  edit_category: (id, data) => request.put(`/category/${id}`, data)
};
