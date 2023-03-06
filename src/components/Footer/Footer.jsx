import "./Footer.css";
function Footer() {
  return (
    <div id="footer">
      <p>Centro autorizado por Electrolux Colombia</p>
      <div className="redes">
        <a
          href="https://www.facebook.com/ElectroluxColombia/"
          target="_blank"
        >
          <button>
            <img
              src="/src/components/Imagenes/facebook.png"
              alt="Facebook"
            ></img>
          </button>
        </a>
        <a
          href="https://www.instagram.com/electrolux_co/"
          target="_blank"
        >
          <button>
            <img
              src="/src/components/Imagenes/instagram.png"
              alt="Instagram"
            ></img>
          </button>
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=573160250327&text=Necesito+mayor+informaci%C3%B3n%21&type=phone_number&app_absent=0"
          target="_blank"
        >
          <button>
            <img
              src="/src/components/Imagenes/whatsapp.png"
              alt="WhatsApp"
            ></img>
          </button>
        </a>
      </div>
    </div>
  );
}
export default Footer;
