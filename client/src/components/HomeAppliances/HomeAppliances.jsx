import ProductComponent from "../../components/ProductComponent/ProductComponent"
import Button from "../button/button";
import { Link } from 'react-router-dom'

import photo1 from "../../components/product-images/iron.png"

import Title from "../../components/Title/Title"
import Slider from "react-slick";
import { useEffect, useState } from "react"

import Axios from "axios"


// NOTE: THE CUSTOM CSS STYLE FOR THE PRODUCT COMPONENT IS WRITTEN IN THE LANDING PAGE CSS FILE.

const HomeAppliances = () => {


  // MAKING REQUEST TO THE SERVER 
  const [products, setProduct] = useState([])

  const fetchProducts = async () => {
    const {data} = await Axios.get("http://localhost:5000/api/products")


    // console.log(data)
    setProduct(data)
  }

  useEffect(() => {
    fetchProducts()
  }, [])


  // SETTING UP THE MODLUE FOR SLIDE EFFECT 
  const [settings, setSettings] = useState({
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    cssEase: "linear",
    arrows: false,
responsive: [
    {
    breakpoint: 1024,
    settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
    }
    },
    {
    breakpoint: 600,
    settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
    }
    },
    {
    breakpoint: 480,
    settings: {
        slidesToShow: 2,
        slidesToScroll: 1
    }
    },
    {
    breakpoint: 479,
    settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]   
  });


  {/* HOME APPLIANCE COMPONENT  */}
  return (
    <>
      <div className="container mt-5">
        <Title titleName="home appliances" />

        <Slider {...settings} className='products py-3'> 
        {
          // LOOPING AND DISPLAYING THE PRODUCTS IN THE BROWSER. 
          products && products.map((item, index) => {
              return (
                <div data-index={index} key={item.product_id}>
                  <ProductComponent 
                    productImage={`./img/${item.product_img}`}
                    productName={item.product_name} 
                    price={item.product_price} 
                    avaliableItems="52"
                  />
                  <div className="px-lg-5 px-4 d-flex justify-content-center">
                    <Link to={`/cart/${item.product_id}`} className="btn btn-sm">Add To Cart</Link> 
                  </div>
                </div>
              ) 
            }
          )
        }
          
          

          <div>
            <ProductComponent 
              productImage={photo1} 
              productName="Electric Iron" 
              price="800" 
              avaliableItems="52" 
            />
            <div className="px-lg-5 px-4 d-flex justify-content-center">
              <Link to={`/cart/1`} className="btn btn-primary btn-sm">Add To Cart</Link> 
            </div>
          </div>
        </Slider>
      </div>

    </>
  )
}

export default HomeAppliances