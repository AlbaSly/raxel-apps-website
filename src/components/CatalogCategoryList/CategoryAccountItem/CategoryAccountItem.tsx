import React from 'react'

import { IAppCatalogAccount } from '../../../interfaces';

import _HeaderDetails from './_HeaderDetails';
import _BodyDetails from './_BodyDetails';

import './index.css';

/**
 * Componente que renderiza un elemento que contiene los datos de la cuenta, como lo es el nombre, precio, cantidad de dispositivos, detalles, etc.
 * @param param0 recibe un parámetro de tipo IAppCatalogAccount
 * @returns React Component (JSX)
 */
const CategoryAccountItem: React.FC<{account: IAppCatalogAccount}> = ({account}) => {
  return (
    <_Container account={account}>
      <_HeaderDetails account={account}/>
      <_BodyDetails account={account}/>
    </_Container>
  )
}

/**
 * Componente hijo de CategoryAccountItem cuyo única función es servir de contenedor.
 * @returns React Component (JSX)
 */
function _Container({children, account}: React.PropsWithChildren<{account: IAppCatalogAccount}>) {
  return (
    <div className={['catalogo-card bg-gray-200 relative rounded-lg shadow-md hover:shadow-xl hover:scale-105', account.details ? 'h-80' : ''].join(' ')}>
      {children}
    </div>
  )
}

export default CategoryAccountItem