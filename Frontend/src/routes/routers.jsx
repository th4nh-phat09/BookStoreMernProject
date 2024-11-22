import { createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { path: "/", element: <Home /> },
        { path: "order", element: <h1>Order</h1> },
        { path: "profile", element: <h1>Profile</h1>}]
    },
  ]);

export default router