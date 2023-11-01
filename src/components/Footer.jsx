// Footer.jsx

import React from 'react';
import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className='bg-blue-300 text-black py-12'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
          <div>
          <Image
              src="/capybara.png"
              width={100}
              height={100}
              alt="logo pagina"
              style={{
                width: '70%',
              }}
              priority
            />
          </div>
          <div>
            <h6 className='mb-2 font-bold'>Colabora con nosotros</h6>
            <ul className="list-none ">
              <li>Colaboraciones</li>
              <li>Programa de afiliados</li>
              <li>Centro de dropshipping</li>
              <li>Iniciar secion como vendedor</li>
            </ul>
          </div>
          <div>
            <h6 className='mb-2 font-bold'>Metodos de pago</h6>
            <ul className="list-none ">
              <li>Tarjeta de debito y credito</li>
              <li>Tarjeta de regalo</li>
              <li>Tarjeta en efectivo</li>
              <li>Pagos a meses</li>

            </ul>
          </div>
          <div>
            <h6 className='mb-2 font-bold'>Podemos ayudarte</h6>
            <ul>
              <li>Devolver o remplazar productos</li>
              <li>Gestionar contenido y dispositivos</li>
              <li>Ayuda</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;