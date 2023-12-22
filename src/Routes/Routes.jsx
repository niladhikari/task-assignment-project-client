import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import HomePage from "../Pages/HomePage/HomePage";
import SignUpPage from "../Pages/SignUpPgae/SignUpPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import DashboardPage from "../Pages/DashboardPage/DashboardPage";
import CreateTaskPage from "../Pages/CreateTaskPage/CreateTaskPage";
import PrivateRoute from "./PrivateRoute";

import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import Error from "../Pages/Error/Error";
import Update from "../Components/Update/Update";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      { path: "/signUp", element: <SignUpPage></SignUpPage> },
      {
        path: "/login",
        element: <LoginPage></LoginPage>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/update/:id",
        element: <Update></Update>,
        loader: ({ params }) =>
          fetch(`https://task-assignment-project-server.vercel.app/myTask/${params.id}`),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardPage></DashboardPage>
      </PrivateRoute>
    ),
  },
  {
    path: "/createTask",
    element: (
      <PrivateRoute>
        <CreateTaskPage></CreateTaskPage>
      </PrivateRoute>
    ),
  },
]);
