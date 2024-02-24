import React from "react";
import { RouteObject } from "react-router-dom";

import RouteConstants from "./routeConstants";

import PublicLayout from "../layouts/PublicLayout";
import { CatalogStateProvider } from "../contexts/CatalogContext";

const NotFoundPage = React.lazy(() => import('../pages/NotFoundPage'));

const HomePage = React.lazy(() => import('../pages/public/home/HomePage'));
const InformacionPage = React.lazy(() => import('../pages/public/InformacionPage'));
const CatalogoPage = React.lazy(() => import('../pages/public/CatalogoPage'));
const PaquetesPage = React.lazy(() => import('../pages/public/PaquetesPage'));
const ContactoPage = React.lazy(() => import('../pages/public/ContactoPage'));

/**
 * Rutas de la aplicación, divididas en públicas y privadas.
 */
const ApplicationRouter = {
  public: {
    element: <PublicLayout />,
    children: [
      {
        path: RouteConstants.public.home,
        element: <HomePage />,
      },
      {
        path: RouteConstants.public.info,
        element: <InformacionPage />
      },
      {
        path: RouteConstants.public.catalogo,
        element: (
          <CatalogStateProvider>
            <CatalogoPage />
          </CatalogStateProvider>
        )
      },
      {
        path: RouteConstants.public.paquetes,
        element: <PaquetesPage />
      },
      {
        path: RouteConstants.public.contacto,
        element: <ContactoPage />
      }
    ],
    errorElement: <NotFoundPage />
  } as RouteObject
}


export default ApplicationRouter;