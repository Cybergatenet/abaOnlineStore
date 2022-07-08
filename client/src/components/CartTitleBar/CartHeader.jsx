import "../../components/CartComponent/CartComponent.css"



const CartHeader = ({ TotalPrice, TotalItems }) => {


  return (
    <>
    <div style={font} className='px-lg-5 px-5'>
        <div className="cart-summary px-3">
            <p style={cartSummay}>CART SUMMARY</p>
        </div>

        <div className="subtotal bg-white px-3 shadow-sm py-3">
            <span className="d-flex justify-content-between">
                <p className="total" style={weight}>Subtotal</p>
                <p className="total"><b>${TotalPrice}</b></p>
            </span>
            <div className="delivery">
                <p>Delivery fee not included</p>
            </div>
        </div>

        <div className="total-items px-3 py-3">
            <p>Total Items <span><b className="text-dark">{TotalItems}</b></span></p>
        </div>
    </div>
    </>
  )
}

const font = {
    fontSize: '0.4em'
}
    
const weight = {
    color: "#000",
    fontWeight: "700"
}

const cartSummay = {
    color: '#888',
}

export default CartHeader