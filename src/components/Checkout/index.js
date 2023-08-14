import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Timestamp, addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";
import CheckOutForm from "./CheckOutForm";


const CheckOut = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState ('')

    const {cart, totalPrices, clearCart} = useContext(CartContext)

    const createOrder = async ({ name, phone, email}) => {
        setLoading(true)

        try {
            const objOrder = {
                buyer: {
                    name, phone, email
                },
                items: cart,
                total: totalPrices(),
                date: Timestamp.fromDate( new Date())
            }

            const batch = writeBatch (db)

            const outOfStock = []

            const ids = cart.map(prod => prod.id)

            const productsRef = collection(db, "products")

            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))

            const { docs } = productsAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedtoCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedtoCart?.quantity

                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, {stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })
            if(outOfStock.length === 0) {
                await batch.commit() 
                
                const orderRef = collection(db, "orders")
                console.log ({orderRef, objOrder})
                const orderAdded = await addDoc(orderRef, objOrder)

                setOrderId(orderAdded.id)
                clearCart()
            } else {
                console.error ("Hay productos que estan fuera de stock")
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }
    if(loading) {
        return <h1> Se esta generando su orden...</h1>
    }
    if(orderId) {
        return <h1> El id de su orden es: {orderId} </h1>
    }
    console.log ({createOrder})
    return (
        <div>
            <h1>Checkout</h1>
            <CheckOutForm onConfirm={createOrder}/>
        </div>
    )
}

export default CheckOut;