import { createBrowserRouter} from "react-router-dom";
import App from "../App";
const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { path: "/", element: <h1>Home</h1> },
        { path: "order", element: <h1>Order</h1> },
        { path: "profile", element: <h1>Profile</h1>}]
    },
  ]);

export default router