import React from 'react'
import "../../pages/Account/Account.css"
import Navbar from "../../components/NAVBAR/navbar"
import Modal from "../../components/Modal/Modal"
const { useState } = require("react")


function Account() {
  const [account, setAccount] = useState(true)

    const moveLogin = () => {
      setAccount(!account)
      console.log("clicked")
    }

  return (
    <>
      <Navbar />
      {/* <div>Account</div> */}
    
      <div className="Account">
          
          <div className="form-container py-3 px-3 border shadow-sm">

            {/* BTN FOR SWITCHING FORM  */}
            <div className="px-3">
              <h3 className='indicatorBtn' onClick={moveLogin}>Click Here to Go to {!account ? "Login" : "Sign Up"}</h3>

              <p className='text-danger'>We will Display any Error msg Here!.</p>
            </div>

            {/* Login  */}
            <form className={!account ? "d-none" : "login-form px-3 py-5"}>
              <div className='pb-3 px-3'>
                <h5 className='text-right'>Login</h5>
              </div>
              <input type="text" className='form-control border-bottom my-3' placeholder='Name' />

              <input type="text" className='form-control border-bottom my-4' placeholder='Password' />

              <div className="btn btn-lg btn-block mt-5 text-white">Login</div>
              
            </form>

            {/* Sign Up  */}
            <form className={!account ? 'signup-form px-3 py-5' : "d-none"}>

              <div className='pb-3 px-3'>
                <h5 className='text-right'>Sign Up</h5>
              </div>

              <input type="text" className='form-control border-bottom my-3' placeholder='Name' />

              <input type="text" className='form-control border-bottom my-3' placeholder='Email' />

              <input type="text" className='form-control border-bottom my-3' placeholder='Phone' />

              <input type="text" className='form-control border-bottom my-3' placeholder='Password' />

              <div className="btn btn-lg btn-block mt-5 text-white">Sign Up</div>

            </form>
          </div>
      </div>


      <Modal 
        modalTitle={"USER VERIFICATION"}
        BlockedValue={"False"} 
        DeletedValue={"False"} 
        PhoneToVerify={"08068399612"} 
        PhoneVerifyValue={"Not verified"}
        EmailToVerify={"hartjust553@gmail.com"}
        EmailVerifyValue={"Not verified"}   
      />




        {/* <div className="verification shadow px-3 py-5">
          <p className='text-center'>VERIFICATION</p>
          <div className="verify py-4">
            <span className='d-flex justify-content-between my-2'>
              <p>Blocked :</p>
              <p>False</p>
            </span>
            <span className='d-flex justify-content-between my-2'>
              <p>Deleted :</p>
              <p>False</p>
            </span>
            <span className='d-flex justify-content-between my-2'>
              <p>Phone : 08068399612</p>
              <p>Not verified</p>
            </span>
            <span className='d-flex justify-content-between my-2'>
              <p>Email : hartjust553@gmail</p>
              <p>Not verified</p>
            </span>
          </div>
        </div> */}
    </>
  )
}


export default Account