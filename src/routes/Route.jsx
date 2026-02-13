import { createBrowserRouter } from "react-router";
import Root from "../root/Root";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Team from "../pages/Team/Team";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
        {
            index: true,
            path: "/",
            Component: Home
        },
        {
          path: "/about",
          Component: About
        },
        {
          path: "/team",
          Component: Team
        }
    ],
  },
]);

export default router;