import { AiFillContainer, AiFillGold, AiFillHome, AiFillInfoCircle, AiFillPhone } from "react-icons/ai";
import { IconType } from "react-icons";

import RouteConstants from "../router/routeConstants";

const NavbarMenuItems = {
  public: <Array<INavbarMenuItem>>[
    {
      label: 'Inicio',
      path: RouteConstants.public.home,
      icon: AiFillHome
    },
    {
      label: 'Catálogo',
      path: RouteConstants.public.catalogo,
      icon: AiFillContainer,
    },
    {
      label: 'Paquetes',
      path: RouteConstants.public.paquetes,
      icon: AiFillGold,
    },
    {
      label: 'Información',
      path: RouteConstants.public.info,
      icon: AiFillInfoCircle
    },
    {
      label: 'Contacto',
      path: RouteConstants.public.contacto,
      icon: AiFillPhone,
    }
  ],
  app: <Array<INavbarMenuItem>>[

  ]
}

export default NavbarMenuItems;

export interface INavbarMenuItem {
  path: string;
  label: string;
  icon: IconType;
}