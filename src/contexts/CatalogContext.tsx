import { createContext, useContext, useEffect, useRef, useState } from "react";
import { IAppCatalog } from "../interfaces";

interface CatalogState {
  catalogList: IAppCatalog[];
  selectCatalog: (catalog: IAppCatalog) => void;
  catalogSelected: IAppCatalog | null;
  scrollRef: React.RefObject<HTMLDivElement>;
}

const CatalogContext = createContext<CatalogState | null>(null);


export const CatalogStateProvider: React.FC<React.PropsWithChildren> = ({children}) => {

  const [ catalogList, setCatalogList ] = useState<IAppCatalog[]>([]);
  const [ catalogSelected, setCatalogSelected ] = useState<IAppCatalog | null>(null);

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadCatalog = () => 
    fetch('/data/catalogoAppsData.json')
      .then(res => res.json())
      .then((data: IAppCatalog[]) => {
        setCatalogList(data);
      });
    
    
    loadCatalog();
  }, []);

  const selectCatalog = (catalog: IAppCatalog) => setCatalogSelected(catalog);

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


export const useCatalog = (): CatalogState => {
  const context = useContext(CatalogContext);

  if (!context) throw new Error('useCatalog debe ser usado con CatalogStateProvider');

  return context;
}