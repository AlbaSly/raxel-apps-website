import React from 'react'

import _SelectorItem from './_SelectorItem';
import { useCatalog } from '../../contexts/CatalogContext';


const _Selector: React.FC = () => {

  const {
    catalogList,
  } = useCatalog();

  return (
    <_SelectorScrollContainer>
      {
        catalogList.map((cat, i) => <_SelectorItem key={i} catalog={cat} />)
      }
    </_SelectorScrollContainer>
  )
}

function _SelectorScrollContainer({children}: React.PropsWithChildren<{}>) {

  const {
    scrollRef
  } = useCatalog();

  return (
    <div ref={scrollRef} className='overflow-x-scroll container relative mx-auto p-2 py-2'>
      <div className='flex gap-4 gap-x-2'>
        { children }
      </div>
    </div>
  )
}

export default _Selector;