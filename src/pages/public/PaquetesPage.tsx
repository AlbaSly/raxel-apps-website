import PageTitle from "../../components/PageTitle"
import PageWrapper from "../../components/PageWrapper"

/**
 * Componente qeu renderiza la página de Paquetes
 * @returns React Component (JSX)
 */
const PaquetesPage = () => {
  return (
    <PageWrapper>
      <PageTitle title="Paquetes"/>

      <div className="p-2 absolute top-1/2 w-screen flex flex-col items-center text-center">
        <p className="text-white text-3xl sm:text-4xl md:text-6xl">¡En mantenimiento!.</p>
        <p className="text-white text-xl mt-2">Estamos preparando nuevas ofertas y paquetes...</p>
      </div>
    </PageWrapper>
  )
}

export default PaquetesPage