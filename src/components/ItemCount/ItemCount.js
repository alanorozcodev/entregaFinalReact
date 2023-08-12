import { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';



const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <div className='Counter'>
            <div className='Controls'>
                <h4 className='Number'>{quantity}</h4>
                <Button variant="outline-primary" onClick={decrement}>-</Button>
                <Button variant="outline-primary" onClick={increment}>+</Button>
            </div>
            <div>
                <Button variant="outline-primary" onClick={() => onAdd(quantity)} disabled={!stock}>Agregar al carrito</Button>
            </div>
        </div>
    )
}

export default ItemCount;