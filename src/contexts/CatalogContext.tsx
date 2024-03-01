import { createContext, useContext, useEffect, useRef, useState } from "react";
import { IAppCatalog } from "../interfaces";

/**
 * Interfaz para gestionar los elementos que constituyen al State del CatalogContext
 */
interface CatalogState {
  catalogList: IAppCatalog[];
  selectCatalog: (catalog: IAppCatalog) => void;
  catalogSelected: IAppCatalog | null;
  scrollRef: React.RefObject<HTMLDivElement>;
}

/**
 * Declaración del CatalogContext
 */
const CatalogContext = createContext<CatalogState | null>(null);


/**
 * Provider para gestionar el estado de acuerdo al CatalogContext en el componente CatalogosPage
 * @param param0 
 * @returns 
 */
export const CatalogStateProvider: React.FC<React.PropsWithChildren> = ({children}) => {

  /**
   * State para gestionar el listado de catálogos
   */
  const [ catalogList, setCatalogList ] = useState<IAppCatalog[]>([]);
  /**
   * State para gestionar el catálogo seleccionado
   */
  const [ catalogSelected, setCatalogSelected ] = useState<IAppCatalog | null>(null);
  /**
   * Referencia del scrollbar en el componente _Selector
   */
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    /**
     * Función que carga desde un JSON el listado de catálogos
     * @returns Promesa que completa la operación
     */
    const loadCatalog = () => fetch('/data/catalogoAppsData.json').then(res => res.json()).then(setCatalogList);
    
    loadCatalog();
  }, []);

  /**
   * Función que dado un catálogo lo guarda en el state (catalogSelected)
   * @param catalog objeto de tipo IAppCatalog
   */
  const selectCatalog = (catalog: IAppCatalog) => setCatalogSelected(catalog);

  /**
   * Declaración del contenido del state precargado
   */
  const state: CatalogState = {
    catalogList,
    selectCatalog,
    catalogSelected,
    scrollRef,
  }

  return (
    <CatalogContext.Provider value={state}>
      { children }
    </CatalogContext.Provider>
  )
}

/**
 * Custom Hook para usar el CatalogContext
 * @returns 
 */
export const useCatalog = (): CatalogState => {
  const context = useContext(CatalogContext);

  if (!context) throw new Error('useCatalog debe ser usado con CatalogStateProvider');

  return context;
}