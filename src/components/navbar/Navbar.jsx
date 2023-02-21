import "./Navbar.css";
function Navbar() {
  const abrirVentana = () => {
    window.open("https://www.ejemplo.com", "_blank");
  };

  return (
    <div className="header">
      <nav>
        <ul>
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="/about-us">Sobre nosotros</a>
          </li>
          <li>
            <a href="/contact-us">Contacto</a>
          </li>
          <a href="/">
            <img className="logo" src="/Logo.jpg" alt="logo" />
          </a>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
