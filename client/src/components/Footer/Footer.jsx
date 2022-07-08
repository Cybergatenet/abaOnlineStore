import App from "../../App.css"
import FooterCss from "../../components/Footer/Footer.css"


const Footer = () => {
  return (
    <div className="Footer">
      <div className="top text-center py-1">
        <p className="mt-3">back to top</p>
      </div>
      
      <div className="container pt-5">
        <div className="d-flex justify-content-between px-lg-3">
          <p>help center</p>
          <p>contact us</p>
          <p>terms & condition</p>
        </div>

       <div className="container mt-2">
        <div className="d-flex justify-content-between px-lg-5">
          <p>become a seller</p>
          <p>report a product</p>
        </div>
       </div>

        <div className="container copy-right text-center">
          <div className="px-lg-5">
            <p>All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer