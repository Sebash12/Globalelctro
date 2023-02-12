import './Contacto.css'
function Contacto(){
    return(
        <div>
            <h2>Nuestra Ubicación:</h2>
            <br />
            <iframe className='mapa'
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.4747725663165!2d-74.06001599999999!3d4.687247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9ac2198bae7f%3A0xebb51b385502cb7c!2sELECTROLUX%20GLOBAL%20ELECTRO%20100%20DISTRIBUIDOR%20AUTORIZADO!5e0!3m2!1ses!2sco!4v1676079523860!5m2!1ses!2sco" 
                width="350vw" 
                height="350wh" 
                style={{ border: 0 }}
                allowfullscreen="yes" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>
            <div className='datos'>
                <h2> Contactanos:</h2>
                <table>
                    <tr>
                        <td>
                        Sebastian Herrera Silva <br/>
                        Whatsapp: 3118899989 <br />
                        Correo: juanherrera.jshs@gmail.com
                        </td>
                        <td>
                        Sebastian Herrera Silva <br/>
                        Whatsapp: 3118899989 <br />
                        Correo: juanherrera.jshs@gmail.com
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Contacto