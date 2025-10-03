'use client';

export default function EventMenu() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="event_menu" className="event_menu">
      <div className="container_menu">
        <div className="event_nav">
          <ul>
            <li>
              <a
                onClick={() => scrollToSection('component-dde2b7e1-573d-4cec-8b63-3c9175a24da0')}
                className="event_menu_link cursor-pointer"
              >
                Eventos
              </a>
            </li>
            <li>
              <a
                onClick={() => scrollToSection('component-17b12048-5e79-4aeb-bd00-088ac4aaef7c')}
                className="event_menu_link cursor-pointer"
              >
                Términos y Condiciones
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
