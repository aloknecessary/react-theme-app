import { Dashboard } from "../components/Dashboard/index";
import { Sidebar } from "../components/Sidebar";
import App from "../App";

var routes = [
  
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    exact: false
  },
  {
    path: "/sidebar",
    name: "Sidebar",
    component: Sidebar,
    exact: false
  },
  {
    path: "/",
    name: "Home",
    component: App,
    exact: true
  }
];
export default routes;
