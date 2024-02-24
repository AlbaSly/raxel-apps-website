import { Link } from "react-router-dom";
import PageTitle from "../../components/PageTitle";
import PageWrapper from "../../components/PageWrapper";

/**
 * Componente que renderiza la página de Información
 * @returns React Component (JSX)
 */
const InformacionPage = () => {
  return (
    <PageWrapper>
      <PageTitle title="Información" />
      <div className="container px-2 mx-auto text-gray-200 font-medium">
        <section className="my-8 p-8 rounded-md shadow-md" style={{backgroundColor: 'rgba(0, 0, 0, .5)'}}>
          <h2 className="underline text-emerald-400 drop-shadow-lg text-center md:text-left text-2xl my-4 font-semibold">
            ¿Cómo funciona el proceso de compra?
          </h2>

          <div className="text-base md:text-lg font-medium">
            <p>El proceso es realizado de una manera sencilla:</p>

            <ul className="list-decimal space-x-8">
              <div></div>
              <li>Usted elige la plataforma o paquete de su preferencia.</li>
              <li>Una vez elegida, se contacta por cualquiera de nuestros <Link to={'/contacto'} className="underline text-rose-500">contactos</Link>.</li>
              <li>
                Una vez se le confirma la disponibilidad del producto elegido, procede
                a hacer el pago (Aceptamos transferencia y depósitos).
              </li>
              <li>
                Ya confirmado el pago, se procede a preparar la cuenta de
                nuestra parte.
              </li>
              <li>
                Usted recibe la cuenta y verifica que pueda acceder y todo esté
                en orden.
              </li>
              <li>
                A partir de aquí solamente queda tener en cuenta la fecha de
                finalización de su plan y respetar las reglas que nosotros les
                proporcionemos.
              </li>
            </ul>
          </div>
        </section>

        <section className="my-8 p-8 rounded-md shadow-md" style={{backgroundColor: 'rgba(0, 0, 0, .5)'}}>
          <h2 className="underline text-emerald-400 drop-shadow-lg text-center md:text-left text-2xl my-4 font-semibold">
            Una vez que tengo mi cuenta, ¿Qué reglas debo respetar?
          </h2>

          <p className="text-base md:text-lg font-medium">
            Esto dependerá de la plataforma y el tipo de cuenta; ya al momento
            de realizar el pago y recibir la cuenta, nosotros le
            proporcionaremos todas las reglas, por lo que deberá estar atento a
            recibirlas y leerlas.
          </p>
        </section>

        <section className="my-8 p-8 rounded-md shadow-md" style={{backgroundColor: 'rgba(0, 0, 0, .5)'}}>
          <h2 className="underline text-emerald-400 drop-shadow-lg text-center md:text-left text-2xl my-4 font-semibold">
            Si mi cuenta/perfil deja de servir, ¿ya no puedo hacer nada?
          </h2>

          <p className="text-base md:text-lg font-medium">
            Si su cuenta o perfil deja de permitirle el acceso, indica
            contraseña incorrecta o sufrió alguna anomalidad que le impida
            acceder a la misma, deberán reportarlo lo más pronto posible, ya que
            de esta forma se hará la identificación de la cuenta, y así darle
            otro reemplazo.
          </p>
        </section>

        <section className="my-8 p-8 rounded-md shadow-md" style={{backgroundColor: 'rgba(0, 0, 0, .5)'}}>
          <h2 className="underline text-emerald-400 drop-shadow-lg text-center md:text-left text-2xl my-4 font-semibold">
            ¿Hay reembolsos?
          </h2>

          <p className="text-base md:text-lg font-medium">
            Si, durante el momento que usted hace el pago, existe una garantía
            de reembolso en el caso de que nosotros, al aceptar su pedido, no
            consigamos la cuenta prometida en un plazo máximo de{" "}
            <strong>12-24 horas</strong>.
          </p>

          <p className="text-base md:text-lg font-medium">
            Nosotros no daremos excusas, si no cumplimos con ese plazo máximo de
            horas, el reembolso se efectúa.
          </p>
        </section>

        <section className="my-8 p-8 rounded-md shadow-md" style={{backgroundColor: 'rgba(0, 0, 0, .5)'}}>
          <h2 className="underline text-emerald-400 drop-shadow-lg text-center md:text-left text-2xl my-4 font-semibold">
            Aclaraciones
          </h2>
          <ul className="text-base md:text-lg font-medium list-disc">
            <li>
              El tiempo de procesamiento para las cuentas puede variar, por lo
              que se le pide paciencia.
            </li>
            <li>
              El incumplimiento de las reglas le inhabilita la garantía de
              reemplazo, por lo que se deben seguir al pie de la letra.
            </li>
            <li>
              Siempre avísenos en caso de algún problema con la cuenta, con
              gusto le atenderemos.
            </li>
          </ul>
        </section>
      </div>
    </PageWrapper>
  );
};

export default InformacionPage;
