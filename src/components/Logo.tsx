import { Link } from "react-router-dom"


/**
 * Componente que renderiza el logo del encabezado (Header Component) de la aplicación.
 * @returns React Component (JSX)
 */
const Logo = () => {
  return (
    <Link to="/" className={'font-medium text-white text-2xl md:text-4xl drop-shadow-md'}>
      <p>Raxel <span className="text-emerald-400 font-bold">Apps</span></p>
    </Link>
  )
}

export default Logo