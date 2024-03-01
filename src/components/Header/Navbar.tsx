import { useEffect, useState } from "react"
import NavbarMenuItems, { INavbarMenuItem } from "../../constants/navbarMenuItems"
import NavbarItem from "./NavbarItem";


/**
 * Barra de navegación de la aplicación
 * @returns React Component (JSX)
 */
const Navbar = () => {

  const [ items, setItems ] = useState<Array<INavbarMenuItem>>([]);

  useEffect(() => {
    const loadItems = () => setItems(NavbarMenuItems.public);

    loadItems();
  }, );

  return (
    <nav className="flex flex-col w-full md:w-auto lg:w-4/5 md:flex-row items-center justify-center md:justify-normal md:gap-2">
      {
        items.map((item, index) => <NavbarItem key={index} item={item}/>)
      }
    </nav>
  )
}

export default Navbar