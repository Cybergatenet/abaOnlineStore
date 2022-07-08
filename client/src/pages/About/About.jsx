import "../About/About.css"
import Navbar from "../../components/NAVBAR/navbar"
import Footer from "../../components/Footer/Footer"
import ProductComponent from "../../components/ProductComponent/ProductComponent"

import img1 from "../../components/product-images/frigde.png"
import img2 from "../../components/product-images/watch.jpg"
import img3 from "../../components/product-images/iron.png"
import Search from "../../components/Search/Search"



const About = () => {
  return (
    <>
      <Navbar />

      <div className="product-view bg-white px-lg-0 px-3">
        <div className="category container d-flex justify-content-between pt-5 px-4">
          <p><b>home deal</b></p>
          <Search />
        </div>

        <div className="container py-5">
          <div className="row g-4 py-5">
            <div className="col-md-3">
              <ProductComponent 
                productImage={img1} 
                productName='small sized fridge' 
                price='300' avaliableItems='10' 
              />
            </div>
            <div className="col-md-3">
              <ProductComponent 
                productImage={img2} 
                productName='watch' 
                price='150' avaliableItems='15' 
              />
            </div>
            
            <div className="col-md-3">
              <ProductComponent 
                productImage={img3} 
                productName='electric iron' 
                price='150' avaliableItems='35' 
              />
            </div>
            <div className="col-md-3">
              <ProductComponent 
                productImage={img2} 
                productName='watch' 
                price='150' avaliableItems='15' 
              />
            </div>
            
            <div className="col-md-3">
              <ProductComponent 
                productImage={img1} 
                productName='small sized fridge' 
                price='300' avaliableItems='10' 
              />
            </div>
            <div className="col-md-3">
              <ProductComponent 
                productImage={img2} 
                productName='watch' 
                price='150' avaliableItems='15' 
              />
            </div>
            
            <div className="col-md-3">
              <ProductComponent 
                productImage={img3} 
                productName='electric iron' 
                price='150' avaliableItems='35' 
              />
            </div>
            <div className="col-md-3">
              <ProductComponent 
                productImage={img2} 
                productName='watch' 
                price='150' avaliableItems='15' 
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />     
    </>
  )
}

export default About