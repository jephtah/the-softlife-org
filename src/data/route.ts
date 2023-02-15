import { Aboutpage } from "../pages/about";
import { Blogpage } from "../pages/blog";
import { Partner } from "../pages/partner";
import { Projectspage } from "../pages/projects";

export const allRoute = [
    { path: '/partnership', component: Partner},
    { path: '/blog', component: Blogpage},
    { path: '/projects', component: Projectspage},
    { path: '/aboutus', component: Aboutpage}
]