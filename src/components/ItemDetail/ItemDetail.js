import { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";


const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handledOnAdd = (quantity) => {
        setQuantityAdded (quantity)
        
        addItem({id, name, img, category, description, price, stock}, quantity)
    } 

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg" />
            </picture>
            <section>
                <p className="Info">
                    Categoria: {category}
                </p>
                <p className="Info">
                    Descripcion: {description}
                </p>
                <p className="Info">
                    Precio: ${price}
                </p>
            </section>
            <footer className="ItemFooter">
                <div>
                {quantityAdded > 0 ? 
                (<div><Link to='/cart'><span title="Ver Carrito">Ver carrito</span></Link>
                        <Link to='/checkout' className="Option">Terminar Compra</Link> </div>) 
                        : 
                        (<ItemCount initial={1} stock={stock} onAdd={handledOnAdd} /> ) }
                </div>             
            </footer>
        </article>
                )
}


export default ItemDetail;