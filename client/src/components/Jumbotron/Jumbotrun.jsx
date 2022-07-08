import img from '../../asserts/imgs/jumborum.png'
import Button from '../button/button'
import JumbotrunCss from "../Jumbotron/Jumbotron.css"
import App from "../../App.css"


const Jumbotrun = () => {
  return (
    <div className="jumbotron jumbotronStyle">
        <div className="container py-5">
           <div className='desc'>
                <h1 className="display-3x textStyle" >Get Your Best Product From Our Online Store</h1>
                <div  className='desc'>
                    <p className="my-2 paraStyle">The problem of our country has become so supersticious that our president is now into confussion.</p> 
                    <div className=''>
                        <Button btnType="button" btnStyle="btn" btnName="Get Started"/>
                    </div>
                </div>
           </div>
        </div>
    </div>
  )
}


// const btnStyling = {
//     border: "none!important",
//     // backgroundColor: "#5bccf6",
//     backgroundColor: "green!important",

// }



export default Jumbotrun