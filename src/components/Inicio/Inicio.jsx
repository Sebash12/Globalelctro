import './Inicio.css'
function Inicio(){
    return(
        <div>
            <h1>Nuestros Servicios</h1>
            <table>
                <tr>
                    <td><a href="/ventas"><img className="imgi" src="/ACCESORIOS.png" alt="imagen not found" /></a></td>
                    <td><a href=""><img className="imgi" src="/BOLSAS Y FILTROS.png" alt="imagen not found" /></a></td>
                    <td><a href="/contact-us"><img className="imgi" src="/SERVICIO TECNICO.png" alt="imagen not found" /></a></td>
                </tr>
            </table>
        </div>
    )
}
export default Inicio