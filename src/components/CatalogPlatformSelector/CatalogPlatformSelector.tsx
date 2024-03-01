import React from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { useCatalog } from "../../contexts/CatalogContext";
import _Selector from "./_Selector";

/**
 * Componente que muestra un selector de plataformas en el catálogo.
 * @returns React Component (JSX)
 */
const CatalogPlatformSelector: React.FC = () => {
  const { scrollRef } = useCatalog();

  const scrollToLeft = (scrollOffset = 120) => (scrollRef.current!.scrollLeft -= scrollOffset);
  const scrollToRight = (scrollOffset = 120) => (scrollRef.current!.scrollLeft += scrollOffset);

  return (
    <div>
      {/* Instrucciones */}
      <Instructions />

      {/* Wrapper */}
      <Wrapper>
        {/* Botón para desplazarse a la izquierda */}
        <ScrollToLeftButton handleScrollLeft={scrollToLeft} />

        {/* Selector de plataformas */}
        <_Selector />

        {/* Botón para desplazarse a la derecha */}
        <ScrollToRightButton handleScrollRight={scrollToRight} />
      </Wrapper>
    </div>
  );
};

/**
 * Componente para mostrar las instrucciones de uso del catálogo.
 * @returns React Component (JSX)
 */
function Instructions() {
  return (
    <div className="container mx-auto text-white text-sm md:text-base lg:text-lg md:font-normal">
      <p className="w-11/12 mx-auto md:w-auto md:mx-0">
        Para usar el catálogo, deslice la barra de derecha a izquierda (o use
        los botones de dirección) y seleccione una de las aplicaciones; la lista
        se cargará según la aplicación seleccionada.
      </p>
    </div>
  );
}

/**
 * Componente que envuelve el contenido del selector de plataformas.
 * @returns React Component (JSX)
 */
function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div
      className="container mx-auto my-4 p-2 flex items-center gap-2 rounded-md shadow-md"
      style={{ backgroundColor: "rgba(0, 0, 0, .25)" }}
    >
      {children}
    </div>
  );
}

/**
 * Botón para desplazarse a la izquierda en el catálogo.
 * @returns React Component (JSX)
 */
function ScrollToLeftButton({ handleScrollLeft }: React.PropsWithChildren<{ handleScrollLeft: () => void | number }>) {
  return (
    <button
      onClick={() => handleScrollLeft()}
      className="bg-white rounded-md flex flex-col items-center justify-center p-1 shadow-md hover:shadow-lg hover:bg-gray-300"
    >
      <AiFillCaretLeft className="text-rose-500" size={32} />
    </button>
  );
}

/**
 * Botón para desplazarse a la derecha en el catálogo.
 * @returns React Component (JSX)
 */
function ScrollToRightButton({
  handleScrollRight,
}: React.PropsWithChildren<{ handleScrollRight: () => void | number }>) {
  return (
    <button
      onClick={() => handleScrollRight()}
      className="bg-white rounded-md flex flex-col items-center justify-center p-1 shadow-md hover:shadow-lg hover:bg-gray-300"
    >
      <AiFillCaretRight className="text-rose-500" size={32} />
    </button>
  );
}

export default CatalogPlatformSelector;
