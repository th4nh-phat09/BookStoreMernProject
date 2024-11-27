import { createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import CartPage from "../pages/Book/CartPage";
const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/order", element: <h1>Order</h1> },
        { path: "/profile", element: <h1>Profile</h1>},
        { path: "/login", element: <Login />},
        { path: "/register", element: <Register />},
        { path: "/cart", element: <CartPage />},
      ]
    },
  ]);

export default router