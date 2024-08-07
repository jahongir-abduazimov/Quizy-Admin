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
}

export interface CategoryStore {
  categories: any[];
  isLoading: boolean;
  getCategories: () => Promise<any>;
}