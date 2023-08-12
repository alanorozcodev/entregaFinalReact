import cart from './assets/cart.svg';
import '../CartWidget/CartWidget.css';

const CartWidget = () => {
    return (
        <div className='DiseñoCarrito'>
            <img src={cart} alt= "Carrito de compra"/>
            0
        </div>
    )
}



export default CartWidget;