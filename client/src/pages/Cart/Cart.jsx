import  "../../pages/Cart/Cart.css"
import Navbar from "../../components/NAVBAR/navbar"
import img from "../../asserts/imgs/tv2.jpg"
import { useState } from "react"
import Button from "../../components/button/button.jsx"
import Footer from "../../components/Footer/Footer.jsx"
// import Axios from 'axios'
// import { useEffect } from "react"
import CartComponent from "../../components/CartComponent/CartComponent"
import CartHeader from "../../components/CartTitleBar/CartHeader"






const Cart = () => {

  // FUNCTION TO FETCH THE SELECTED PRODUCT FROM THE USER TO ADD IT TO CART 
  // const [selected, setSelected] = useState()

  // useEffect(() => {
  //   getProduct()
  // }, [])

  // const getProduct = async () => {
  //   const singlePorduct = await Axios.get("http://localhost:5000/api/cart") 

  //   setSelected(singlePorduct)
  // }
  // console.log(selected)




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
      <Navbar />

      <div className="cartContainer">

        {/* CART HEADER  */}
        <CartHeader 
          TotalItems={1} 
          TotalPrice={3000} 
        />

        <div className="cart">
          <div className="py-4">
            <div className="row g-4">

              {/* RENDERING CART ITEMS HERE  */}
              <div className="col-md-5">
                <CartComponent 
                  ProductImg={img} 
                  ProductName={'24 inches television'} 
                  Price={5000} 
                  ProductDescription={'This is a decription text.'} 
                />
              </div>
              <div className="col-md-5">
                <CartComponent 
                  ProductImg={img} 
                  ProductName={'24 inches television'} 
                  Price={5000} 
                  ProductDescription={'This is a decription text'} 
                />
              </div>
             
              {/* CHECKOUT BTN  */}
                <div className="row mt-5 px-5">
                  <div className="checkout col-10 d-flex justify-content-end px-3">
                    <Button 
                      btnType="button" 
                      btnName='CHECKOUT' 
                    />
                  </div>
              </div>
            </div>
            
          </div>
        </div>

      </div>

      <Footer />

    </>

  )
}





export default Cart
