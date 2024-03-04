import React from 'react';

import { IAppCatalogAccount } from '../../../interfaces';

/**
 * Componete que renderiza el cuerpo del componente CategoryAccountItem
 * @param param0 recibe un parámetro de tipo IAppCatalogAccount para su deestructuración durante el pase de argumentos.
 * @returns React Component (JSX)
 */
const _BodyDetails: React.FC<{account: IAppCatalogAccount}> = ({account}) => {
  return (
    /**
     * Contenedor
     */
    <div className='p-4'>
      <_Details account={account}/>

      {/* <_GenericPurchaseButton account={account}/> */}
    </div>
  )
}

/**
 * Componente hijo de _BodyDetails que renderiza los detalles dado un objeto de tipo IAppCatalogAccount
 * @param param0 substracción de propiedades del objeto account. 
 * @returns React Component (JSX)
 */
function _Details({account: { details }}: {account: IAppCatalogAccount}) {
  if (!details) return ('');

  return (
    <div className='text-gray-600'>
      <p className='font-semibold'>Detalles:</p>
      <div className='details-scroll h-24 overflow-y-scroll'>
        <p>{details}</p>
      </div>
    </div>
  )
}

// function _GenericPurchaseButton({account: { available }}: {account: IAppCatalogAccount}) {
//   if (!available) return <></>

//   return <Link to={'/contacto'} className='absolute bottom-0 py-4 left-0 right-0 block w-full rounded-b-md bg-violet-500 hover:bg-gray-700 text-center text-xl text-white font-bold p-2 rounded-sm shadow-md'>Click para comprar</Link>
// }

export default _BodyDetails