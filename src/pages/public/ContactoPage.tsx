import { Link } from "react-router-dom";

import { FaFacebook, FaFacebookF, FaWhatsapp } from "react-icons/fa6";
import { FcPhoneAndroid, FcVoicePresentation } from "react-icons/fc";

import PageWrapper from "../../components/PageWrapper";
import PageTitle from "../../components/PageTitle";

/**
 * Componente que renderiza la página de Contacto
 * @returns React Component (JSX)
 */
const ContactoPage = () => {
  return (
    <PageWrapper>
      <PageTitle title="Contáctanos" additionalClasses="md:hidden"/>
      <div className="container mx-auto my-16">
        <section
          style={{}}
          className={[
            "bg-transparent md:bg-blue-800 w-11/12 mx-auto md:shadow-lg md:rounded-xl",
            "md:flex items-center justify-center",
          ].join(" ")}
        >
          <div className="md:w-1/3 p-8 rounded-md h-full z-50 flex flex-col items-center justify-center">
            <h1 className="hidden md:inline text-center text-2xl md:text-3xl lg:text-4xl font-semibold text-white">
              Contáctanos
            </h1>
            <div className="flex my-6 gap-x-8">
              <FcPhoneAndroid size={64} className="drop-shadow-xl"/>
              <FcVoicePresentation size={64} className="drop-shadow-xl"/>
            </div>
            <p className="font-medium text-gray-300 text-center text-lg">
              Si está interesado en alguna cuenta o paquete en particular, usando las siguientes formas de comunicación:
            </p>

          </div>

          <section className="md:w-2/3 p-8 bg-transparent md:bg-gray-200 text-gray-500 rounded-r-xl h-full">
            <div className="h-full flex flex-col items-center justify-center">
              <h2 className="hidden md:block text-center text-2xl font-semibold text-blue-700">
                Puede comunicarse con nosotros en:
              </h2>

              <div className="my-10 flex flex-col gap-y-8">
                <div>
                  <h3 className="my-2 text-center md:text-left text-white md:text-gray-600 text-xl font-semibold drop-shadow-xl">Página de Facebook</h3>
                  <div className="flex items-center gap-x-4">
                    <FaFacebook size={48} className="text-blue-700"/>
                    <Link target="blank" to={'https://www.facebook.com/raxel.apps'} className="inline-block w-3/5 px-4 py-2 bg-blue-700 text-white text-center rounded-md shadow-md hover:shadow-xl hover:bg-blue-500 hover:translate-x-4">Click Aquí</Link>
                  </div>
                </div>

                <div>
                  <h3 className="my-2 text-center md:text-left text-white md:text-gray-600 text-xl font-semibold drop-shadow-xl">Whatsapp</h3>
                  <div className="flex items-center gap-x-4">
                    <FaWhatsapp size={48} className="text-green-500"/>
                    <Link target="blank" to={'https://api.whatsapp.com/send?phone=9932001981'} className="inline-block w-3/5 px-4 py-2 bg-green-600 text-white text-center rounded-md shadow-md hover:shadow-xl hover:bg-green-400 hover:translate-x-4">Click Aquí</Link>
                  </div>
                </div>

                <div>
                  <h3 className="my-2 text-white md:text-gray-600 text-xl font-semibold drop-shadow-xl">O con nuestros vendedores oficiales:</h3>
                  <div className="flex items-center gap-x-4">
                    <Link target="blank" to={'https://www.facebook.com/profile.php?id=61554506180139'} className="w-full flex items-center justify-center gap-1.5 bg-gray-200 text-gray-600 p-2 rounded-md shadow-lg border-2 border-gray-300 hover:bg-gray-300 hover:-translate-y-2">
                      <FaFacebookF className="text-blue-700"/>
                      <p>Brando Moreno</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
    </PageWrapper>
  );
};

export default ContactoPage;
