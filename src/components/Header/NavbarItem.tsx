import { NavLink } from 'react-router-dom';
import { INavbarMenuItem } from '../../constants/navbarMenuItems'

/**
 * Props del componente NavbarItem
 */
type Props = {
  item: INavbarMenuItem;
}
/**
 * Componente que renderiza cada Item que representa a su vez cada hijo de la barra de navegación (Navbar Component)
 * @returns React Component (JSX)
 */
const NavbarItem = ({item: { label, path, icon }}: Props) => {
  return (
    <NavLink 
      to={path} 
      className={
        ({isActive}) => [
          isActive ? 'bg-rose-500 drop-shadow-md' : '',
          'p-1 md:p-2',
          'w-full md:rounded-xl',
          'border-2 border-transparent hover:border-rose-500',
          'text-center text-base md:text-lg font-medium text-gray-200',
        ].join(' ')
      }>
      <div className='flex gap-1 items-center justify-center'>
        {icon({})}
        <p className='drop-shadow-lg'>{label}</p>
      </div>
    </NavLink>
  )
}

export default NavbarItem