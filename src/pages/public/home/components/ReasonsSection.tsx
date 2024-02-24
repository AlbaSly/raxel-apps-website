import {
  FcApproval,
  FcAssistant,
  FcConferenceCall,
  FcLike,
  FcMoneyTransfer,
} from "react-icons/fc";

const ReasonsSection = () => {
  return (
    <div className="bg-gradient-to-b from-rose-500 to-amber-600 py-16 flex flex-col items-center justify-center">
      <section className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-white text-center animate__animated">
          ¿Por qué comprar con nosotros?
        </h2>

        <div className="my-16 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-16 sm:gap-8 text-gray-200">
          <div className="flex flex-col gap-2">
            <h3 className="text-center text-xl font-semibold">
              Entrega Asegurada
            </h3>
            <FcApproval size={96} className="mx-auto drop-shadow-lg" />
            <p className="text-center text-lg">
              Siempre nos aseguraremos de que su pedido se complete con un 100%
              de efectividad. De lo contrario, le devolveremos su dinero
              íntegro.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-center text-xl font-semibold">
              Garantía y Soporte
            </h3>
            <FcAssistant size={96} className="mx-auto drop-shadow-lg" />
            <p className="text-center text-lg">
              ¿Problemas o cuestiones con su cuenta una vez entregada? No se
              preocupe, le atenderemos lo más pronto posible, a diferencia de
              otros vendedores y revendedores que no dan la cara y bloquean a
              sus clientes.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-center text-xl font-semibold">
              Clientes Satisfechos
            </h3>
            <div className="flex items-center justify-center">
              <FcConferenceCall size={96} className="drop-shadow-lg"/>
              <FcLike size={64} className="drop-shadow-lg"/>
            </div>
            <p className="text-center text-lg">
              Contamos con bastantes referencias y recomendaciones de varios
              clientes satisfechos con sus pedidos y la calidad del
              servicio/garantía.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-center text-xl font-semibold">
              Cuide su economía
            </h3>
            <FcMoneyTransfer size={96} className="mx-auto drop-shadow-lg" />
            <p className="text-center text-lg">
              Y lo más importante, siempre contamos con precios en favor de su
              bolsillo, al igual que paquetes y promociones atractivas a precios accesibles.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReasonsSection;
