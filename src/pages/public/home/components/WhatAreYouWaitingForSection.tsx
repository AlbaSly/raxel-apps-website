import { FcFlashOn } from "react-icons/fc";

const WhatAreYouWaitingSection = () => {
  return (
    <div className="py-16">
      <section>
        <div className="font-semibold text-3xl md:text-4xl text-white text-center animate__animated animate__fadeIn opacity-0">
          <h2 className="">¿Qué esperas?</h2>
          <p className="mt-2 text-xl font-medium">
            Comienza a comprar tus cuentas a buen precio.
          </p>

          <FcFlashOn size={96} className="mx-auto my-8 drop-shadow-lg" />
        </div>
      </section>
    </div>
  );
};

export default WhatAreYouWaitingSection;
