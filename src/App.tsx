import { createBrowserRouter, RouterProvider } from "react-router";
import { HomePage } from "./pages/HomePage";
import { AdminPage } from "./pages/AdminPage";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/admin", element: <AdminPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
