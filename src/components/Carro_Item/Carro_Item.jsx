import './Carro_Item.css'
import numeral from 'numeral';

function formatPrice(price) {
    // console.log(price)
    //return price;
    return '$' + numeral(price).format('0,0');
}

function Carro_Item ({data,delFromCart}){
    let {id,titulo,imagen,precio,descripcion,cantidad}=data;
    return(
    <div className='contenedorCarrito'>
        <h2>{titulo}</h2>
        <img source={imagen}></img>
        <h3>{formatPrice(precio)} x {cantidad} = {formatPrice(precio * cantidad)}</h3>
        <button className='botones' onClick={()=>delFromCart(id)}>Eliminar</button>
    </div>
)
}

export default Carro_Item   