import { useEffect, useState } from "react";
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";



const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const { itemId } = useParams()

    useEffect(() => {

        const docRef = doc(db, 'products', itemId)

        getDoc(docRef)
            .then(Response => {
                console.log (Response)
                const data = Response.data()
                const productAdapted = { id: Response.id, ...data}
                setProduct(productAdapted) 
            })
        .catch(error => {
            console.log(error)
    })
    }, [itemId] )

    return ( 
        <div clasName="ItemDetailContainer">
            <ItemDetail {...product} id={itemId} />
        </div>
    
    )
}

export default ItemDetailContainer;