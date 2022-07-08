import "./CartCard.css"
import { useState } from "react"


const CartCard = ({ ProductImg, ProductName, Price, ProductDescription }) => {

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
        <div className="selected-products bg-white shadow-sm">
            <div className="product py-2">
            <div className="details d-flex">
                <div className="product-img">
                <img src={ProductImg} className='img-fluid' alt="Product img" />
                </div>

                <div className="product-name px-1">
                  <p className="name">{ProductName}</p>
                  <p className="price text-dark"><b>${Price}</b></p>

                  <div className="product-desc mt-3">
                      <p className="text-dark">{ProductDescription}</p>
                  </div>
                </div>
            </div>

            <div className="action-container d-flex align-items-center justify-content-between px-3">
                <div className="delete">
                <p>Delete</p>
                </div>

                <div className="quantity d-flex align-items-center">
                <button className="btn border" onClick={minus}>-</button>
                <span className="mt-1 mx-3"><b className="counter">{count}</b></span>
                <button className="btn border" onClick={() => setCount(count + 1)}>+</button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default CartCard