import React from 'react';
import { IAppCatalog } from '../../interfaces';
import { useCatalog } from '../../contexts/CatalogContext';

/**
 * Props para el componente SelectorItem.
 */
type SelectorItemProps = {
  catalog: IAppCatalog; // Catálogo de la aplicación.
}

/**
 * Componente que representa un elemento del selector de catálogo.
 * @returns React Component (JSX)
 */
const SelectorItem: React.FC<SelectorItemProps> = ({ catalog }) => {
  const { selectCatalog, catalogSelected } = useCatalog(); // Funciones y estado del catálogo

  return (
    <button 
      onClick={() => selectCatalog(catalog)} 
      className={[
        'flex-shrink-0 w-64 px-4 py-2 text-base text-rose-600 hover:bg-gray-300 font-semibold shadow-sm hover:shadow-lg rounded-md border-4',
        (catalogSelected && catalogSelected.id === catalog.id ? 'border-rose-500 bg-gray-300' : 'bg-white border-transparent')
      ].join(' ')}
    >
      <p>{catalog.name}</p>
    </button>
  );
}

export default SelectorItem;
