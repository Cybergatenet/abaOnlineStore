import  "../../components/Reciept/Reciept.css"

const Reciept = ({ buyerName, productName, qty, date, totalPrice, }) => {
  return (
    <>
        <div className="Receipt position-relative ml-3 border">
            <div className="receipt-header text-center py-2">
                <h1 className="receipt-title">Payment Receipt</h1>
            </div>

            <div className="receipt-details bg-white">
                <div className="buyer-detail d-flex justify-content-between py-3 px-2">
                    <p className="buyer-name">Buyer: {buyerName}</p>
                    <p>Payment Date: {date}</p>
                </div>

                <div className="d-flex justify-content-between py-4 px-1">
                    <table className="table">
                        <tr className="d-flex justify-content-between px-1">
                            <th>Product Name</th>
                            <th>Qty</th>
                            <th>Total Price</th>
                        </tr>

                        <tr className="d-flex justify-content-between px-1 mt-3">
                            <td>{productName}</td>
                            <td>{qty}</td>
                            <td>${totalPrice}</td>
                        </tr>
                    </table>
                </div>
                <div className="total-amount text-right px-2 py-3">
                    <p>Total Amount : <b>$5,000</b></p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Reciept