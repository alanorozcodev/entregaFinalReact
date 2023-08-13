import cart from './assets/cart.svg';
import '../CartWidget/CartWidget.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const { totalItems } = useContext(CartContext)

    return (
        <div>
            <Link to= '/cart' className='CartWidget'>
                <img className='CartImg' src={cart} alt= 'Carrito de compra' />
                {totalItems ()>0&&<span id="carrito" className="DiseñoCarrito">{totalItems()}</span>}
            </Link>  
        </div>
    )
}



export default CartWidget;