import BlogCreatePage from "../features/blog/pages/BlogCreatePage";
import BlogPage from "../features/blog/pages/BLogPage";

const blogRoute = [
  {
    path: "blog",
    element: <BlogPage />,
  },
  {
    path: "blog/create",
    element: <BlogCreatePage />,
  },
];

export default blogRoute;
