import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { ReactComponent as IconTrash } from "../NavBar/assets/icons/TrashIcon.svg";

const CartItem =  ({ id, name, img, price, quantity }) => {

    const  { removeItem } =useContext(CartContext);
    console.log({img});
    return (
        <div className='ContainerCartItem'>
            <div className="col-8">
                <Link to={`/item/${id}`}><img className="img-fluid" src={img} alt={name} width="175" /></Link>
            </div>
            <div className="col-4">
                <h2>{name}</h2>
                <p className='textCartItem'>Cantidad: {quantity} </p>
                <p className='textCartItem'>Precio por producto: ${price}</p>
                <p className='textCartItem'>Item Subtotal: ${(quantity * price).toFixed(2)}</p>
                <button className='btn btn-outline-dark btn-inverse rounded-0' onClick={() => removeItem(id)}><IconTrash />Remove Item</button>
            </div>
        </div>
            )

    }
export default CartItem;