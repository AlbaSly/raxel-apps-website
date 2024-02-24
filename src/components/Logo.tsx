import { Link } from "react-router-dom"

const Logo = () => {
  return (
    <Link to="/" className={'font-medium text-white text-2xl md:text-4xl drop-shadow-md'}>
      <p>Raxel <span className="text-emerald-400 font-bold">Apps</span></p>
    </Link>
  )
}

export default Logo