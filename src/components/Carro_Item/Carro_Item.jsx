import './Carro_Item.css'
function Carro_Item ({data,delFromCart}){
    let {id,titulo,imagen,precio,descripcion,cantidad}=data;
    return(
    <div className='contenedorCarrito'>
        <h2>{titulo}</h2>
        <img source={imagen}></img>
        <h3>{precio} x {cantidad} = {precio * cantidad}</h3>
        <button className='botones' onClick={()=>delFromCart(id)}>Eliminar 1</button>
        <button className='botones' onClick={()=>delFromCart(id,true)}> Eliminar Todos</button>
    </div>
)
}

export default Carro_Item   