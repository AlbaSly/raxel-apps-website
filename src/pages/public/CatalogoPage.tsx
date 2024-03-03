import PageWrapper from "../../components/PageWrapper";
import PageTitle from "../../components/PageTitle";

import { useCatalog } from "../../contexts/CatalogContext";

import CatalogPlatformSelector from "../../components/CatalogPlatformSelector";
import CatalogCategoryList from "../../components/CatalogCategoryList";

/**
 * Componente que renderiza la página de Catálogo
 * @returns React Component (JSX)
 */
const CatalogoPage = () => {

  const { catalogSelected } = useCatalog();

  return (
    <PageWrapper>
      <PageTitle title="Catálogo de Apps" additionalText="Última Actualización: 2 de marzo de 2024, 23:00 hrs."/>
      
      <CatalogPlatformSelector />

      {
        catalogSelected && <CatalogCategoryList catalog={catalogSelected}/>
      }

    </PageWrapper>
  )
}

export default CatalogoPage;