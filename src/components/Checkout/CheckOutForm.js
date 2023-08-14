import { useState } from "react";


const CheckOutForm = ({onConfirm}) => {
    const [name, setName] = useState ('')
    const [phone, setPhone] = useState ('')
    const [email, setEmail] = useState ('')

    const handleConfirm = (event) => {
        event.preventDefault()

        const userData = {
            name, phone, email
        }
        console.log({onConfirm})
        
        onConfirm(userData)
    }

    return (
        <div className="Container">
            <form onSubmit={handleConfirm} className="Form">
                <label className="Label">
                    Nombre
                    <input
                    className="input"
                    type="text"
                    value={name}
                    onChange={({target}) => setName(target.value)}
                    />
                </label>
                <label className="Label">
                    Telefono
                    <input
                    className="input"
                    type="text"
                    value={phone}
                    onChange={({target}) => setPhone(target.value)}
                    />
                </label>
                <label className="Label">
                    Email
                    <input
                    className="input"
                    type="email"
                    value={email}
                    onChange={({target}) => setEmail(target.value)}
                    />
                </label>
                <div className="Label">
                    <button type="submit" className="button"> Crear Orden</button>
                </div>
            </form>
        </div>
    )
}

export default CheckOutForm;