import "../../pages/LandingPage/LandingPage.css"

import Fashion from "../../components/Fashoin/Fashion"
import Game from "../../components/Game/Game"
// import { useEffect, useState } from "react"


// import Slider from "react-slick";
import Search from "../../components/Search/Search"
import AboutUs from "../../components/AboutUs/AboutUs"
import HomeAppliances from "../../components/HomeAppliances/HomeAppliances"


// NOTE: THE CUSTOM CSS STYLE FOR THE PRODUCT COMPONENT IS WRITTEN IN THE LANDING PAGE CSS FILE.
const LandingPage = () => {

  


  return (
    <>

      <div className="landingPage bg-white">
        {/* SEARCH BAR COMPONENT */}
        <Search />

        {/* HOME APPLIANCE COMPONENT  */}
        <HomeAppliances />
       

        {/* FASHION DEAL COMPONENT  */}
        <Fashion />


        {/* GAME DEAL COMPONENT */}
        <Game />


        {/* ABOUT DEAL COMPONENT  */}
        <div className="container py-3">
          <div className="py-lg-5">
            <AboutUs />
          </div>
        </div>

      </div>
    </>
  )
}

export default LandingPage