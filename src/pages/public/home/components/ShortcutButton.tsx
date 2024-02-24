import React from "react"
import { Link } from "react-router-dom";

type ShortcutButtonProps = {
  positionClasses: string;
  text: string;
  to: string;
}

const ShortcutButton: React.FC<ShortcutButtonProps> = ({text, to, positionClasses}) => {
  return (
    <Link to={to} className={[
      'boton-catalogo fixed z-50 inline-block py-2 px-4 hover:bg-rose-500 drop-shadow-md hover:shadow-rose-500 shadow-md hover:shadow-sm text-white font-medium rounded-xl text-lg',
      positionClasses,
    ].join(' ')}>{text}</Link>
  )
}

export default ShortcutButton