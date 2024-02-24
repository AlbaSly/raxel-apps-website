import { useState } from "react"

const Footer = () => {
  
  const [ date ] = useState<Date>(new Date());


  return (
    <div className="py-8 text-center text-xl text-gray-300 font-medium">
      <p className="text-sm mb-16 md:text-xl sm:mb-0">©{date.getFullYear()} Raxel Apps. Todos los derechos reservados.</p>
    </div>
  )
}

export default Footer