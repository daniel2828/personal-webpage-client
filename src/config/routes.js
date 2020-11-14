// Layout
import LayoutAdmin from "../layouts/LayoutAdmin";
import LayoutBasic from "../layouts/LayoutBasic";

// Admin pages.
import AdminSingIn from "../pages/Admin/Signin/Signin";
import AdminHome from "../pages/Admin/Admin";
import AdminUsers from "../pages/Admin/Users/Users";
import AdminMenuWeb from "../pages/Admin/MenuWeb";
import AdminNavigationWeb from "../pages/Admin/MenuNavigation";
import AdminCourses from "../pages/Admin/Courses";
//Normal pages

import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Courses from "../pages/Courses";
// Shared

import Error404 from "../pages/Error404";
// Construct layout from up to down
// admin/login charge LayoutAdmin and AdminSingIn.

const routes = [
  {
    path: "/admin",
    component: LayoutAdmin,
    exact: false,
    routes: [
      {
        path: "/admin",
        component: AdminHome,
        exact: true,
      },
      {
        path: "/admin/sign",
        component: AdminSingIn,
        exact: true,
      },
      {
        path: "/admin/users",
        component: AdminUsers,
        exact: true,
      },
      {
        path: "/admin/menu",
        component: AdminMenuWeb,
        exact : true
      },
      {
        path: "/admin/navigation",
        component: AdminNavigationWeb,
        exact : true
      },
      {
        path: "/admin/courses",
        component: AdminCourses,
        exact: true
      },
      {
        component: Error404,
      },
    ],
  },
  {
    path: "/",
    component: LayoutBasic,
    exact: false,
    routes: [
      {
        path: "/",
        component: Home,
        exact: true,
      },
      {
        path: "/contact",
        component: Contact,
        exact: true,
      },
      {
        path: "/courses",
        component: Courses,
        exact: true
      },
      {
        component: Error404,
      },
    ],
  },
];

export default routes;
