import request from "../config";
import { SubcategoryRequest } from "@interface";

export const subcategory: SubcategoryRequest = {
    get_subcategories: (id) => request.get(`/type/${id}`),
    post_subcategory: (data) => request.post("/type", data),
    delete_subcategory: (id) => request.delete(`/type/${id}`),
    edit_subcategory: (id, data) => request.put(`/type/${id}`, data)
}