import request from "../config";
import { CategoryRequest } from "@interface";

export const category: CategoryRequest = {
  get_categories: () => request.get("/category"),
};
