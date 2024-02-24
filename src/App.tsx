import { RouterProvider, createBrowserRouter } from "react-router-dom";

import ApplicationRouter from "./router/Router";

/**
 * Raíz de inicio para la aplicación
 * @returns React Component (JSX)
 */
const App = () => {
  /**Se cargan las rutas públicas */
  const router = createBrowserRouter([ApplicationRouter.public]);

  return (
    /**Implementación de un RouterProvider para inyectar las rutas */
    <RouterProvider router={router} />
  )
}


export default App