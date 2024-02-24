import React from "react";
import { IAppCatalogAccount } from "../../../interfaces";

const _HeaderDetails: React.FC<{ account: IAppCatalogAccount }> = ({ account }) => {
  return (
    <>
      <_AccountAvailabilityIndicator available={ account.available }/>

      <_HeaderWrapper available={ account.available }>

        <_NameAndPriceDisplay account={ account }/>
        <_DeviceQuantityDisplay devices={ account.devices }/>

      </_HeaderWrapper>
    </>
  )
};


function _AccountAvailabilityIndicator({available}: {available: boolean}) {
  return available ? ('') : (
    <div className="bg-amber-600 rounded-t-md py-2">
      <p className="text-center text-gray-200 drop-shadow-md">
        <strong>!No disponible!</strong>
      </p>
    </div>
  )
} 

function _HeaderWrapper({available, children}: React.PropsWithChildren<{available: boolean}>) {
  return (
    <div className={['bg-gray-700 py-4', available ? 'rounded-t-md' : ''].join(' ')}>
      { children }
    </div>
  )
}

function _NameAndPriceDisplay({account: {name, price}}: {account: IAppCatalogAccount}) {
  return (
    <>
      <h5 className="text-center font-bold text-gray-300 text-xl drop-shadow-md">{name}</h5>
      <p className="text-center text-white font-semibold text-lg drop-shadow-md">${(Number.parseFloat(price).toFixed(2))}</p>
    </>
  )
}

function _DeviceQuantityDisplay({devices}: {devices: number | null}) {

  if (!devices) return <></>;

  return (
    <>
      <hr className="my-2 w-full"/>
      <div>
        <p className="text-center mt-3.5 text-base text-white drop-shadow "><strong className="text-rose-400 font-bold text-xl">{devices}</strong> dispositivo(s)</p>
      </div>
    </>
  )
}


export default _HeaderDetails;
