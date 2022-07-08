import React from 'react'
import "../../pages/Account/Account.css"
import Navbar from "../../components/NAVBAR/navbar"
import Modal from "../../components/Modal/Modal"
const { useState } = require("react")


function Account() {
  const [account, setAccount] = useState(true)

    function moveLogin() {
      setAccount(!account)
      console.log("clicked")
    }

  return (
    <>
      <Navbar />
      <div>Account</div>
    
      <div className="Account">
          
          <div className="form-container py-3 px-3 shadow d-none">
            {/* Login  */}
            <form className='login-form px-3 py-5'>
              <div className='pb-3'>
                <h3>Login Up</h3>
              </div>
              <input type="text" className='form-control mt-2' placeholder='Name' />
              <input type="text" className='form-control mt-2' placeholder='Password' />

              <div className="btn btn-lg bg-primary btn-block mt-2 text-white">Login</div>
            </form>

            {/* Sign Up  */}
            <form className='signup-form px-3 py-5'>
              <div className='pb-3'>
                <h3>Sign Up</h3>
              </div>

              <input type="text" className='form-control my-3' placeholder='Name' />
              <input type="text" className='form-control my-3' placeholder='Email' />
              <input type="text" className='form-control my-3' placeholder='Phone' />
              <input type="text" className='form-control my-3' placeholder='Password' />

              <div className="btn btn-lg bg-primary btn-block mt-2 text-white">Login</div>
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