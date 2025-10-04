import ResponsiveImage from '@/components/ResponsiveImage';
import EventMenu from '@/components/EventMenu';
import EventGrid from '@/components/EventGrid';
import TextBlock from '@/components/TextBlock';
import Link from 'next/link';

export default function Home() {
  const events = [
    {
      title: "GUNS N´ ROSES | BOGOTÁ",
      line1: "7 de Octubre",
      line2: "Foro Vive Claro",
      imgUrl: "https://cdn.getcrowder.com/images/15549040-d205-4101-bc7e-c2adf8596a5d-banner-evento-1.png",
      buttonText: "Redimir Entrada",
      url: "https://www.ticketmaster.co/event/guns-n-roses-bogota-nqda"
    },
    {
      title: "GUNS N´ ROSES | MEDELLÍN",
      line1: "11 de Octubre",
      line2: "Estadio Atanasio Girardot",
      imgUrl: "https://cdn.getcrowder.com/images/b1f28cf7-b08a-43bd-a9f9-a01cab08506c-banner-evento-2.png",
      buttonText: "Redimir Entrada",
      url: "https://www.ticketmaster.co/event/guns-n-roses-medelln-nqda"
    },
    {
      title: "IMAGINE DRAGONS | BOGOTÁ",
      line1: "17 de Octubre",
      line2: "Foro Vive Claro",
      imgUrl: "https://cdn.getcrowder.com/images/aaa65d50-f806-4256-99cc-30e79aeadaa8-banner-evento-3.png",
      buttonText: "Redimir Entrada",
      url: "https://www.ticketmaster.co/event/imagine-dragons-nqda"
    },
    {
      title: "LINK PARK | BOGOTÁ",
      line1: "25 de Octubre",
      line2: "Foro Vive Claro",
      imgUrl: "https://cdn.getcrowder.com/images/7b7712e8-0822-439c-ab6b-5b2674aacddd-banner-evento-5.png",
      buttonText: "Redimir Entrada",
      url: "https://www.ticketmaster.co/event/linkin-park-nqda"
    },
    {
      title: "SHAKIRA | CALI",
      line1: "26 de Octubre",
      line2: "Estadio Pascual Guerrero",
      imgUrl: "https://cdn.getcrowder.com/images/474236cb-76e3-4a22-b039-226dfcec5d1f-banner-evento-4.png",
      buttonText: "Redimir Entrada",
      url: "https://www.ticketmaster.co/event/shakira-cali-nqda"
    },
    
    {
      title: "SHAKIRA | BOGOTÁ",
      line1: "1 de Noviembre",
      line2: "Foro Vive Claro",
      imgUrl: "https://cdn.getcrowder.com/images/cf0c4881-4ab3-4ce2-b425-a86dee0308bc-banner-evento-6.png",
      buttonText: "Redimir Entrada",
      url: "https://www.ticketmaster.co/event/shakira-bogota-nqda"
    },
    {
      title: "PÁRAMO CELEBRA 2025 | BOGOTÁ",
      line1: "31 de Octubre",
      line2: "Chamorro City Hall",
      imgUrl: "https://cdn.getcrowder.com/images/ded6ac61-b971-4688-8211-6e71a6838e1e-pramo-celebra-25email-banner.jpg?w=640&format=webp",
      buttonText: "Redimir Entrada",
      url: "https://www.ticketmaster.co/event/pramo-celebra-2025-nqda"
    }
  ];

  return (
    <main className="min-h-screen">
      <ResponsiveImage
        desktopUrl="https://cdn.getcrowder.com/images/c0096a97-5078-4673-b7dd-3c8fc5b11732-landing-banner-desktop.png"
        mobileUrl="https://cdn.getcrowder.com/images/4ad9d6cc-64f6-4c94-8339-7aed2c18a73f-landing-banner-mobile.png"
        alt="main Banner"
      />

      <EventMenu />

      <TextBlock
        paragraph1="Nunca ha sido nuestro estilo. No queremos dejar las cosas así. En 20 años y en más de 700 conciertos hemos
        cumplido muchos sueños que parecían impensables y aún nos quedan muchos por vivir juntos.
        "
        paragraph2="Entendemos que nada será suficiente para reparar la frustración y el vacío con la que quedamos el sábado
        27 de septiembre. La devolución de las entradas es apenas un paso, pero queremos hacer algo más. La
        música es la que siempre ha estado ahí en los momentos más difíciles y confiamos en que así será de nuevo,
        por eso, queremos invitarlos a uno de nuestros próximos conciertos:
        "
        steps={[
          "1. Revisa la lista de eventos disponibles y elige el que más te emocione.",
          "2. Haz clic en \"Redimir entrada\" y te llevaremos directo a Ticketmaster.",
          "3. Allí selecciona la cantidad de boletas y la localidad que prefieras (recuerda que las cantidades habilitadas corresponden a lo que compraste en Kendrick).",
          "4. Continúa con el proceso de compra como siempre: carrito, datos, ¡todo normal!",
          "5. En el resumen de tu compra aparecerá una pregunta en azul: ¿Tienes un código de descuento? Dale clic.",
          "6. Ingresa el código, que corresponde a la cédula del comprador inicial de Kendrick Lamar registrado en Ticketmaster.",
          "7. Revisa tus datos, confirma y listo.",
          "8. Te llegará tu boleta por medio de Quentro"
        ]}
      />

      <EventGrid cards={events} />

      <div id="component-17b12048-5e79-4aeb-bd00-088ac4aaef7c" className="btn-container">
        <Link href="/t&c" className="btn btn-sale3">
          Términos y Condiciones
        </Link>
      </div>
    </main>
  );
}
