import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../features/auth/Pages/LoginPage";
import RegisterPage from "../features/auth/Pages/registerPage";
import dashboardRoute from "./dashboardRoute";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
  },
  ...dashboardRoute,
]);

export default router;
