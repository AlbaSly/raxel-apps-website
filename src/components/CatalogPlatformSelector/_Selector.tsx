import React from 'react';
import _SelectorItem from './_SelectorItem';
import { useCatalog } from '../../contexts/CatalogContext';

/**
 * Componente que muestra el selector de elementos del catálogo.
 * @returns React Component (JSX)
 */
const Selector: React.FC = () => {
  const { catalogList, scrollRef } = useCatalog(); // Lista de catálogos y referencia para el scroll

  return (
    <_SelectorScrollContainer scrollRef={scrollRef}>
      {catalogList.map((cat, i) => <_SelectorItem key={i} catalog={cat} />)}
    </_SelectorScrollContainer>
  );
}

/**
 * Componente que envuelve los elementos del selector y maneja el scroll horizontal.
 * @param param0 como función, recibe la referencia para el scroll (scrollRef).
 * @returns React Component (JSX)
 */
function _SelectorScrollContainer({ children, scrollRef }: React.PropsWithChildren<{ scrollRef: React.RefObject<HTMLDivElement> }>) {
  return (
    <div ref={scrollRef} className='overflow-x-scroll container relative mx-auto p-2 py-2'>
      <div className='flex gap-4 gap-x-2'>
        {children}
      </div>
    </div>
  );
}

export default Selector;
