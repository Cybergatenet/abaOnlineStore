import "../../components/ProductComponent/ProductComponent.css"
// import imgPath from '../../asserts/imgs/cylinder.jpg'

const ProductComponent = ({ productImage, productName, price, avaliableItems }) => {
  return (
    <>
        <div className="ProductComponent bg-white px-4">
            <div className="home-product d-flex flex-column">
                <div className="img-container d-flex justify-content-center p-1">
                    <img src={productImage} className='img-fluid' alt={productImage} />
                </div>
                <div className="home-product-details mt-1">
                    <div className="desc px-lg-3">
                        <div className="name">
                            <p>{productName}</p>
                        </div>
                        <div className="info d-flex justify-content-between">
                            <div className="price">
                                <p className="text-dark"><b>${price}</b></p>
                            </div>
                            <div className="avaliable-products">
                                <p>{avaliableItems} items left</p>
                            </div>
                        </div>
                    </div>

                    {/* <div className="Button">
                        <Button btnType="button" btnName="add to cart" />
                    </div> */}
                </div>
            </div>
        </div>
    </>
  )
}

export default ProductComponent