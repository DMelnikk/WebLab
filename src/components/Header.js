import React, {useState} from 'react'
import { FaShoppingBasket } from "react-icons/fa";
import Order from "./Order";


const showOrders = (props) => {
    return (
        <div>

            {props.orders.map(el => (
                <Order key={el.id} item={el} />
            ))}
        </div>
    )
}

const showNothing = () => {
    return (
        <div className='empty'>
            <h2>No matches</h2>
        </div>
    )
}


export default function Header(props) {
    let [cartOpen, setCartOpen] = useState(false)

    return (
        <header>
            <div>
                <span className='logo'>KebabMeu</span>
                <ul className='nav'>

                    <li>About as</li>
                    <li>Contact</li>
                    <li>Home</li>

                </ul>
                <FaShoppingBasket onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active' }`} />

                {cartOpen && (
                    <div className='shop-cart' >
                        {props.orders.length > 0 ?
                        showOrders(props) : showNothing()}
                         </div>
                )
                }
            </div>
            <div  className='presentation'> </div>
        </header>
    )
}