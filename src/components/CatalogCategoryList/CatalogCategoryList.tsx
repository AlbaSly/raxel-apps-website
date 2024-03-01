import React from 'react'

import { IAppCatalog } from '../../interfaces'

import _CategorySection from './_CategorySection'


/**
 * Componente que renderiza un listado de categorías dado un catálogo.
 * @param param0 recibe un parámetro de tipo IAppCatalog el cual se deestructurará durante el pase de argumentos.
 * @returns React Component (JSX)
 */
const CatalogCategoryList: React.FC<{catalog: IAppCatalog}> = ({catalog}) => {
  return (
    <_Container>
      {catalog.categories.map((category, i) => <_CategorySection key={i} category={category}/>)}
    </_Container>
  )
}

/**
 * Componente hijo de CatalogCategoryList cuya función única es la de servir como contenedor para los elementos hijos.
 * @returns React Component (JSX)
 */
function _Container({children}: React.PropsWithChildren<{}>) {
  return (
    <div className='my-8 container mx-auto'>
      {children}
    </div>
  )
}


export default CatalogCategoryList