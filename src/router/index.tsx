import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
  } from "react-router-dom";
  
  import App from "../App";
  
  import { Home, SignIn, Categories, Subcategories, Quizes } from "@pages";
  const index = () => {
    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path="/" element={<App />}>
          <Route path="/login" element={<SignIn />} />
          <Route path="/" element={<Home />}>
            <Route index element={<Categories />} />
            <Route path="/subcategories/:categoryId" element={<Subcategories />} />
            <Route path="/quizzes/:quizId" element={<Quizes />} />
          </Route>
        </Route>
      )
    );
    return <RouterProvider router={router} />;
  };
  
  export default index;
  