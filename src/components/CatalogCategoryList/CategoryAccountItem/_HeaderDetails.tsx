import React from "react";
import { IAppCatalogAccount } from "../../../interfaces";

/**
 * Componente que renderiza el encabezado del componente CategoryAccountItem
 * @param param0 recibe un parámetro de tipo IAppCatalogAccount para su deestructuración durante el pase de argumentos
 * @returns React Component (JSX)
 */
const _HeaderDetails: React.FC<{ account: IAppCatalogAccount }> = ({ account }) => {
  return (
    <>
      <_AccountAvailabilityIndicator available={ account.available }/>

      <_HeaderWrapper>

        <_NameAndPriceDisplay account={ account }/>
        <_DeviceQuantityDisplay devices={ account.devices }/>

      </_HeaderWrapper>
    </>
  )
};

/**
 * Componente hijo de _HeaderDetails que renderiza la disponibilidad de la cuenta mostrada.
 * @param param0 recibe un parámetro de tipo boolean ({available: boolean}) que indica si esa cuenta está disponible o no.
 * @returns React Component (JSX)
 */
function _AccountAvailabilityIndicator({available}: {available: boolean}) {
  /**
   * ¿Está disponible? En ese caso no se renderiza nada.
   */
  return available ? (
    <div className="bg-emerald-600 rounded-t-md py-2">
      <p className="text-center text-gray-200 drop-shadow-md">
        <strong>Disponible</strong>
      </p>
    </div>
  ) : (
    /**
     * Contenedor estilizado
     */
    <div className="bg-amber-600 rounded-t-md py-2">
      <p className="text-center text-gray-200 drop-shadow-md">
        <strong>!No disponible!</strong>
      </p>
    </div>
  )
} 

/**
 * Componente hijo de _HeaderDetails que renderiza elementos de tipo React.Node (JSX, HTML) dentro del contenedor dado.
 * @returns React Component (JSX)
 */
function _HeaderWrapper({children}: React.PropsWithChildren<{}>) {
  return (
    <div className={['bg-gray-700 py-4'].join(' ')}>
      { children }
    </div>
  )
}

/**
 * Componente hijo de _HeaderDetails que renderiza el nombre y precio de la cuenta a mostrar.
 * @param param0 recibe un parámetro de tipo IAppCatalogAccount para su destructuración durante el pase de argumentos.
 * @returns React Component (JSX)
 */
function _NameAndPriceDisplay({account: {name, price}}: {account: IAppCatalogAccount}) {
  return (
    <>
      <h5 className="text-center font-bold text-gray-300 text-xl drop-shadow-md">{name}</h5>
      <p className="text-center text-white font-semibold text-2xl drop-shadow-md">${(Number.parseFloat(price).toFixed(2))}</p>
    </>
  )
}

/**
 * Componente hijo de _HeaderDetails que renderiza el número de dispositivos respecto a la cuenta a mostrar.
 * @param param0 recibe un parámetro de tipo number | null ({devices: number | null})
 * @returns React Component (JSX)
 */
function _DeviceQuantityDisplay({devices}: {devices: number | null}) {

  if (!devices) return <></>;

  return (
    <>
      <hr className="my-2 w-full"/>
      <div>
        <p className="text-center mt-3.5 text-lg text-white drop-shadow "><strong className="text-rose-400 font-bold text-xl">{devices}</strong> dispositivo(s)</p>
      </div>
    </>
  )
}


export default _HeaderDetails;
