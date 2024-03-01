import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import RouteConstants from "../router/routeConstants";


/**
 * Componente que renderiza cada background, el cuál es dinámico dependiendo de la ruta en la que se encuentre.
 * @returns React Component (JSX)
 */
const BackgroundStylesHandler = ({children}: React.PropsWithChildren<{}>) => {

  const defaultBodyClasses = 'bg-gradient-to-r from-blue-500 to-blue-900';
  const location = useLocation();
  
  useEffect(() => {
    const $body = document.body;

    switch (location.pathname) {
      case RouteConstants.public.info:
        $body.className = 'bg-gradient-to-r from-gray-500 to-gray-800';
        break;
      case RouteConstants.public.catalogo:
        $body.className = 'bg-gradient-to-r from-rose-500 to-rose-900';
        break;
      case RouteConstants.public.paquetes:
          $body.className = 'bg-gradient-to-r from-purple-500 to-purple-900'
          break;
      case RouteConstants.public.contacto:
        break;
      default:
        $body.className = defaultBodyClasses;
        break;
    }
    
    scrollTo({top: 0});

    return () => {
      $body.className = defaultBodyClasses;
    }
  }, [location.pathname]);
  
  return children;
}

export default BackgroundStylesHandler