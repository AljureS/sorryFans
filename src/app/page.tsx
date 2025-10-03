'use client';

import ResponsiveImage from '@/components/ResponsiveImage';
import EventMenu from '@/components/EventMenu';
import EventGrid from '@/components/EventGrid';

export default function Home() {
  const events = [
    {
      title: "GUNS N´ ROSES | BOGOTÁ",
      line1: "7 de Octubre",
      line2: "Foro Vive Claro",
      imgUrl: "https://cdn.getcrowder.com/images/15549040-d205-4101-bc7e-c2adf8596a5d-banner-evento-1.png",
      buttonText: "Más información"
    },
    {
      title: "GUNS N´ ROSES | MEDELLÍN",
      line1: "7 de Octubre",
      line2: "Estadio Atanasio Girardot",
      imgUrl: "https://cdn.getcrowder.com/images/b1f28cf7-b08a-43bd-a9f9-a01cab08506c-banner-evento-2.png",
      buttonText: "Más información"
    },
    {
      title: "IMAGINE DRAGONS | BOGOTÁ",
      line1: "17 de Octubre",
      line2: "Foro Vive Claro",
      imgUrl: "https://cdn.getcrowder.com/images/aaa65d50-f806-4256-99cc-30e79aeadaa8-banner-evento-3.png",
      buttonText: "Más información"
    },
    {
      title: "SHAKIRA | BOGOTÁ",
      line1: "1 de Noviembre",
      line2: "Foro Vive Claro",
      imgUrl: "https://cdn.getcrowder.com/images/cf0c4881-4ab3-4ce2-b425-a86dee0308bc-banner-evento-6.png",
      buttonText: "Más información"
    },
    {
      title: "LINK PARK | BOGOTÁ",
      line1: "25 de Octubre",
      line2: "Foro Vive Claro",
      imgUrl: "https://cdn.getcrowder.com/images/7b7712e8-0822-439c-ab6b-5b2674aacddd-banner-evento-5.png",
      buttonText: "Más información"
    },
    {
      title: "SHAKIRA | CALI",
      line1: "26 de Octubre",
      line2: "Estadio Pascual Guerrero",
      imgUrl: "https://cdn.getcrowder.com/images/474236cb-76e3-4a22-b039-226dfcec5d1f-banner-evento-4.png",
      buttonText: "Más información"
    }
  ];

  return (
    <main className="min-h-screen">
      <ResponsiveImage
        desktopUrl="https://cdn.getcrowder.com/images/ec1153fa-9fc0-4ed7-b7a9-9f6ffa23cb6d-landing-banner-desktop.png"
        mobileUrl="https://cdn.getcrowder.com/images/aa649e12-d989-44fe-979c-43bd2f2b56f6-landing-banner-mobile.png"
        alt="Fan Days 2025 Banner"
      />

      <EventMenu />

      <EventGrid cards={events} />

      <div id="component-17b12048-5e79-4aeb-bd00-088ac4aaef7c" className="btn-container">
        <button className="btn btn-sale3" onClick={() => window.open('', '_blank')}>
          Términos y Condiciones
        </button>
      </div>
    </main>
  );
}
