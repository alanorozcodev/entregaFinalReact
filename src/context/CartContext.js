import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    console.log(cart)

    if (cart.length > 0) {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    if (cart.length === 0 && localStorage.getItem('cart')) {
        setCart(JSON.parse(localStorage.getItem('cart')));
    }



    const addItem = (item, quantity) => {
        const itemAdded = { ...item, quantity };
        const newCart = [...cart];
        const isInCart = newCart.find((i) => i.id === itemAdded.id); 
        if (isInCart) {
            isInCart.quantity += quantity; 
        } else {
            newCart.push(itemAdded);
            }
        setCart(newCart);
        localStorage.removeItem('cart');
        
        localStorage.setItem('cart', JSON.stringify(newCart));
    }

const removeItem = (itemId) => {
    const cartUpdated = cart.filter(prod => prod.id !== itemId)
    setCart(cartUpdated)
}

const clearCart = () => {
    setCart ([])    
    localStorage.removeItem('cart');
}


const totalItems = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
}

const totalPrices = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);//suma de los precios de los items en el carrito
}

return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalItems, totalPrices }}>
        { children}
    </CartContext.Provider>
    )   
}