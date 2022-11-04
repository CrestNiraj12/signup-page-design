import App from "../components/pages/Signup";
import AccountCreated from "../components/pages/AccountCreated";
import { RouteObject } from "react-router-dom";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/account-created",
    element: <AccountCreated />,
  },
];
