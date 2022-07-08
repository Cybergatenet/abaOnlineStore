import { useState } from "react"
import "./AboutUs.css"


const AboutUs = () => {
  // FUNCTION FOR READ MORE 
  const [more, setMore] = useState(false)


  return (
    <>
     <div className="About">
        <h1>Online Store:</h1>
        <div className={!more ? "main-height" : "add-height"}>
          <div className="about-content bg-danger1">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, ducimus est. Incidunt laboriosam optio aperiam et enim tenetur recusandae nostrum necessitatibus numquam sed, aliquid eum nam accusamus ea, illum placeat officiis. Velit repellendus vel suscipit perspiciatis. Ullam omnis quam eos, quo explicabo consequatur tempore recusandae asperiores illum eveniet ipsam perferendis?</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, ducimus est. Incidunt laboriosam optio aperiam et enim tenetur recusandae nostrum necessitatibus numquam sed, aliquid eum nam accusamus ea, illum placeat officiis. Velit repellendus vel suscipit perspiciatis. Ullam omnis quam eos, quo explicabo consequatur tempore recusandae asperiores illum eveniet ipsam perferendis?</p>
          </div>
        </div>

        <div className="read-more">
            <p onClick={() => setMore(!more)}><b>{!more ? "Read More" : "Read Less"}</b></p>
        </div>
     </div>
    </>
  )
}

export default AboutUs