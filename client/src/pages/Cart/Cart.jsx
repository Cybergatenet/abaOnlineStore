import  "../../pages/Cart/Cart.css"
import { useState, useEffect } from "react"
import Axios from 'axios'
import Navbar from "../../components/NAVBAR/navbar"

import Button from "../../components/button/button.jsx"
import Footer from "../../components/Footer/Footer.jsx"
import CartComponent from "../../components/CartComponent/CartComponent"
import CartHeader from "../../components/CartTitleBar/CartHeader"


import CardCard from "../../components/CartCard/CartCard"

const Cart = () => {
  const [loading, setLoading] = useState(true)
  const [product, setProduct] = useState([])

  // useEffect(() => {
  //   Axios.get('http://localhost:5000/api/product/3')
  //   .then(products =>  {
  //     setProduct(products.data)
  //     setLoading(false)
  //   })
  //   .catch(err => console.log(err, "...there is an error"))
  // }, [])

  

  // console.log(product)
  // if(loading){
  //   setProduct('loading...')
  // }

  // // FUNCTION TO CHOOSE QUANTITY 
 

  const getProduct = async () => {
    let item = await Axios.get("http://localhost:5000/api/product/3")

    setProduct(item.data)
  }

  

  useEffect(() => {
    getProduct()

  }, [])


  return (
    <>
      <Navbar />

      <div className="cartContainer">

        {/* CART HEADER  */}
        <CartHeader 
          TotalItems={'1'} 
          TotalPrice={'3000'} 
        />

        <div className="cart">
          <div className="py-4">
            <div className="row g-4">

              {/* RENDERING CART ITEMS HERE  */}

                {/* <div className="col-md-5">
                      <CartComponent 
                        ProductImg={`./img/${product_img}`} 
                        ProductName={product[0].product_name} 
                        Price={product[0].product_price} 
                        ProductDescription={product[0].product_desc} 
                      />
                </div> */}

             
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
