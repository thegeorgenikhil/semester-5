import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, Select } from "./routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/select",
    element: <Select />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
