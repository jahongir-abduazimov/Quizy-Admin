// ---------- Authorization ----------

export interface Signin {
    email: string;
    password: string | number;
  }

export interface Request {
    sign_in: (data: Signin) => any;
  }

// ---------- Category ----------

export interface CategoryRequest {
  get_categories: () => any;
  post_category: (data:any) => any;
  delete_category: (id:any) => any;
  edit_category: (id:any, data:any) => any;
}

export interface CategoryStore {
  categories: any[];
  isLoading: boolean;
  getCategories: () => Promise<any>;
  postCategory: (data: any) => Promise<any>;
  deleteCategory: (id: any) => Promise<any>;
  editCategory: (id: any, data: any) => Promise<any>;
}

// ---------- SubCategory ----------

export interface SubcategoryRequest {
  get_subcategories: (id:string | undefined) => any;
  post_subcategory: (data: any) => any;
  delete_subcategory: (id: any) => any;
  edit_subcategory: (id: any, data: any) => any;
}

export interface SubcategoryStore {
  subcategories: any[];
  isLoading: boolean;
  getSubcategories: (id:string | undefined) => Promise<any>;
  postSubcategory: (data: any) => Promise<any>;
  deleteSubcategory: (id: any) => Promise<any>;
  editSubcategory: (id: any, data: any) => Promise<any>;
}

// ---------- Quiz ----------

export interface QuizRequest {
  get_quizzes: (id: string | undefined) => any;
  post_quiz: (data: any) => any;
  delete_quiz: (id: any) => any;
  edit_quiz: (id: any, data: any) => any;
}

export interface QuizStore {
  quizzes: any[];
  isLoading: boolean;
  getQuizzes: (id: string | undefined) => Promise<any>;
  postQuiz: (data: any) => Promise<any>;
  deleteQuiz: (id: any) => Promise<any>;
  editQuiz: (id: any, data: any) => Promise<any>;
}