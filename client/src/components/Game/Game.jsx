import ProductComponent from "../ProductComponent/ProductComponent"
import Button from "../button/button";

import img1 from "../../components/product-images/frigde.png"
import img2 from "../../components/product-images/watch.jpg"
import img3 from "../../components/product-images/iron.png"

import { useEffect, useState } from "react"
import Slider from "react-slick"
import Title from "../../components/Title/Title"



// NOTE: THE CUSTOM CSS STYLE FOR THE PRODUCT COMPONENT IS WRITTEN IN THE LANDING PAGE CSS FILE.

const Game = () => {

    // SETTING UP THE MODLUE FOR SLIDE EFFECT 
    const [settings, setSettings] = useState({
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 700,
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



    // GAME DEAL COMPONENT 
  return (
    <>
     <div className="container mt-5">
        
        <Title titleName="gaming" />

            <Slider {...settings} className='products py-3'> 
    
        <div className="mx-2">
            <ProductComponent 
            productImage={img3} 
            productName="iron" 
            price="300" 
            avaliableItems="10" 
            />

            <div className="px-lg-5 px-4 d-flex justify-content-center">
                <Button 
                  btnType="button" 
                  btnName="Add To Cart" 
                />
            </div>
        </div>

        <div className="mx-2">
            <ProductComponent 
            productImage={img2} 
            productName="watch" 
            price="600" 
            avaliableItems="100" 
            />

            <div className="px-lg-5 px-4 d-flex justify-content-center">
                <Button 
                  btnType="button" 
                  btnName="Add To Cart" 
                />
            </div>
        </div>

        <div className="mx-2">
            <ProductComponent 
            productImage={img1} 
            productName="fridge" 
            price="1000" 
            avaliableItems="102" 
            />

            <div className="px-lg-5 px-4 d-flex justify-content-center">
                <Button 
                  btnType="button" 
                  btnName="Add To Cart" 
                />
            </div>
        </div>

        <div className="mx-2">
            <ProductComponent 
            productImage={img3} 
            productName="iron" 
            price="300" 
            avaliableItems="10" 
            />

            <div className="px-lg-5 px-4 d-flex justify-content-center">
                <Button 
                  btnType="button" 
                  btnName="Add To Cart" 
                />
            </div>
        </div>

        <div className="mx-2">
            <ProductComponent 
            productImage={img2} 
            productName="watch" 
            price="600" 
            avaliableItems="100" 
            />

            <div className="px-lg-5 px-4 d-flex justify-content-center">
                <Button 
                  btnType="button" 
                  btnName="Add To Cart" 
                />
            </div>
        </div>

        <div className="mx-2">
            <ProductComponent 
            productImage={img1} 
            productName="fridge" 
            price="1000" 
            avaliableItems="102" 
            />

            <div className="px-lg-5 px-4 d-flex justify-content-center">
                <Button 
                  btnType="button" 
                  btnName="Add To Cart" 
                />
            </div>
        </div>
        </Slider>
    </div>
   </>
  )
}

export default Game