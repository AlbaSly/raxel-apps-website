import React from 'react'

import { IAppCatalog } from '../../interfaces'

import _CategorySection from './_CategorySection'


const CatalogCategoryList: React.FC<{catalog: IAppCatalog}> = ({catalog}) => {
  return (
    <_Container>
      {catalog.categories.map((category, i) => <_CategorySection key={i} category={category}/>)}
    </_Container>
  )
}

function _Container({children}: React.PropsWithChildren<{}>) {
  return (
    <div className='my-8 container mx-auto'>
      {children}
    </div>
  )
}


export default CatalogCategoryList