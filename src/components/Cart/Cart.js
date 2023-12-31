import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"

const Cart = () => {
    const {cart, clearCart, totalItems, totalPrices} =useContext(CartContext)



    if (totalItems === 0) {
        return (
            <div>
                <h1>No hay items en el carrito</h1>
                <Link to= '/' className="Option">Productos</Link>
            </div>
        )
    }
    console.log({cart});
    return (
        <div>
            { cart.map(p => <CartItem key={p.id} {...p}/>)}
            <h3>Total: ${totalPrices()} </h3>
            <button onClick={() => clearCart()} className="Button">Limpiar Carrito</button>
            <Link to= '/checkout' className="Option">CheckOut</Link>
        </div>
    )
}

export default Cart;