import "./Footer.css";
function Footer() {
  return (
    <div id="footer">
      <p>Centro autorizado por Electrolux Colombia</p>
      <div className="redes">
        <a
          href="https://es-la.facebook.com/people/Global-Electro-100/100069341773556/"
          target="_blank"
        >
          <button>
            <img
              src="/facebook.png"
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
              src="/instagram.png"
              alt="Instagram"
            ></img>
          </button>
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=573204809394&text&type=phone_number&app_absent=0"
          target="_blank"
        >
          <button>
            <img
              src="/whatsapp.png"
              alt="WhatsApp"
            ></img>
          </button>
        </a>
      </div>
    </div>
  );
}
export default Footer;
