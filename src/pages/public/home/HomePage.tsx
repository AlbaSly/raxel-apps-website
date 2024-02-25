import SectionWrapper from "./components/SectionWrapper"
import ReasonsSection from "./components/ReasonsSection";
import WhatAreYouWaitingSection from "./components/WhatAreYouWaitingForSection";
import ShortcutButton from "./components/ShortcutButton";

/**
 * Componente que renderiza la página de Inicio
 * @returns React Component (JSX)
 */
const HomePage = () => {
  return (
    <>
      <ShortcutButton text="Información" to="/info" positionClasses="bottom-4 left-2"/>
      <ShortcutButton text="Ver Catálogo" to="/catalogo" positionClasses="bottom-4 right-2"/>

      <SectionWrapper
        sectionTitle="Consigue apps de plataformas de Streaming, Música y otros a un precio económico." 
        sectionTitleHighlightableWord="económico"
        sectionTitleDescription="No sacrifiques tu bolsillo."
        img="/img/main.png"
        imgAlt="Netflix en laptop"
      />

      <SectionWrapper 
        sectionTitle="Con las apps más populares del momento y muchas más."
        sectionTitleDescription="Contamos con un flexible y organizado catálogo con los mejores planes."
        img="/img/plataformas.jpeg"
        imgAlt="Plataformas de Streaming"
        rowReverse={true}
        className="bg-gradient-to-l from-purple-500 to-purple-800"
      />

      <SectionWrapper 
        sectionTitle="Tus plataformas favoritas para escuchar música a excelentes precios."
        sectionTitleDescription="¿Qué deseas escuchar?"
        img="/img/musica.png"
        imgAlt="Plataformas de música"
        className="bg-gradient-to-r from-amber-500 to-orange-800"
      />

      <ReasonsSection />

      <WhatAreYouWaitingSection />
    </>
  )
}

export default HomePage