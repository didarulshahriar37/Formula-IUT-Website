import { createBrowserRouter } from "react-router";
import Root from "../root/Root";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Team from "../pages/Team/Team";
import Contact from "../pages/Contact/Contact";

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
        },
        {
          path: "/contact",
          Component: Contact
        }
    ],
  },
]);

export default router;