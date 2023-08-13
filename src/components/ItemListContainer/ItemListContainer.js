import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import { query, collection, getDocs, where } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";




const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const { categoryId } = useParams()
    const [loading, setLoading] = useState (true)



    useEffect(() => {
        const productsCollection = collection(db, "products")
        console.log({categoryId});
        const q = categoryId ? query(productsCollection, where("category", "==", categoryId)) : productsCollection;
        getDocs(q).then((snapshot) => {
            console.log(snapshot)
            if (snapshot.size > 0) {
            setProducts(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })))
            setLoading(false) 
        } else {
            console.log("No such document!");
        }
        })
        .catch((error) => { console.error(error); })
    }, [categoryId]);




    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products?? []} />
        </div>
    )
}

export default ItemListContainer;