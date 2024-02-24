import React from 'react'

import { IAppCatalogAccount } from '../../../interfaces';

import _HeaderDetails from './_HeaderDetails';
import _BodyDetails from './_BodyDetails';

import './index.css';

const CategoryAccountItem: React.FC<{account: IAppCatalogAccount}> = ({account}) => {
  return (
    <_Container>
      <_HeaderDetails account={account}/>
      <_BodyDetails account={account}/>
    </_Container>
  )
}

function _Container({children}: React.PropsWithChildren<{}>) {
  return (
    <div className='catalogo-card bg-gray-200 relative rounded-lg shadow-md hover:shadow-xl hover:scale-105 h-80'>
      {children}
    </div>
  )
}

export default CategoryAccountItem