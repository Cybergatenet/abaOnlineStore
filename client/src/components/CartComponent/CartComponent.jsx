import { useState } from "react"
import Button from "../../components/button/button.jsx"
import Footer from "../../components/Footer/Footer.jsx"
// import Axios from 'axios'
import { useEffect } from "react"
import CartCard from "../CartCard/CartCard"
import "../../components/CartComponent/CartComponent.css"


const CartComponent = ({ ProductImg, ProductName, Price, ProductDescription }) => {

    // // FUNCTION TO CHOOSE QUANTITY 
    let price = 5.699, totalPrice

    const [count, setCount] = useState(1)
    const minus = () => {
        {
        count > 1 ? setCount(count - 1) : count = 1
        }
    }
    let total = totalPrice = price * count


  return (
    <>
    <div className="CartComponent px-5">

    {/* CART HEADER  */}
        <div>
            {/* USER SELECTED PRODUCT  */}
            <div className="">
                <CartCard 
                    ProductImg={ProductImg} ProductName={ProductName} Price={Price} ProductDescription={ProductDescription} 
                />
            </div>
        </div>
    </div>


    </>
  )
}

export default CartComponent