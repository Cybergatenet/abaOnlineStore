import Navbar from "../../components/NAVBAR/navbar"
import "../../pages/Dashboard/Dashboard.css";
import Reciept from "../../components/Reciept/Reciept";
import Modal from "../../components/Modal/Modal"
import { useState, useEffect } from "react";
import CartComponent from "../../components/CartComponent/CartComponent";
import img from "../../asserts/imgs/tv2.jpg"
import CartHeader from "../../components/CartTitleBar/CartHeader";
import Button from "../../components/button/button";



const Dashboard = () => {

  return (
    <>
        <Navbar />
        <div className="Dashborad">

            {/* DASHBOARD MENU  */}
            <div className="sideMenu py-5 shadow">
                <ul className="list-unstyled py-5 d-flex flex-column px-3">
                    <h2 className="pl-2 py-2">USER DASHBOARD</h2>
                    <li className="p-2">Cart</li>
                    <li className="p-2">History</li>
                    <li className="p-2">Payment method</li>
                    <li className="p-2">User profile</li>
                    <li className="p-2">Notification</li>
                    <li className="p-2">Dark mode</li>
                    <li className="p-2">Logout</li>
                    <li className="p-2">Delete account</li>
                </ul>
            </div>



            <div className="dashoardActivity py-5 px-2">

                {/* YET TO BE PURCHASE PRODUCTS  */}
                <div className="py-5">
                    {/* RENDERING CART ITEMS HERE  */}
                    <div className="cart-items py-5">

                        {/* CART HEADER  */}
                        <CartHeader 
                            TotalItems={'1'} 
                            TotalPrice={5000} 
                        />


                        {/* RENDERING CART COMPONENT  */}
                        <div className="row g-2 justify-content-between">

                            <div className="col-md-6">
                                <CartComponent 
                                    ProductImg={img} 
                                    ProductName="24 inches tv" Price='5000' ProductDescription='This is the product description text.' 
                                />
                            </div>
                            

                            {/* CHECKOUT BTN  */}
                            <div className="d-flex justify-content-end my-5 px-5">
                                <div className="checkout">
                                <Button btnType="button" btnName='CHECKOUT' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                



                {/* HISTORY FOR PAYMENT RECEIPT */}
                <div className="history py-5 row g-3 justify-content-center">
                    <div className="py-5 mx-auto">
                        <div className="d-flex flex-column align-items-center">
                            {/* RENDERING RECIEPTS HERE  */}
                            <div className="mx-2 col-md-7">
                                <Reciept 
                                buyerName={"Hart c Justman"} 
                                productName={"Television"} 
                                qty={5} 
                                date={"25, March, 2022"} 
                                totalPrice={2000}  
                                />
                            </div>
                        </div>
                    </div>
                </div>




                {/*RENDERING USER PROFILE HERE  */}
                <div className="user-profile">
                    <Modal 
                        modalTitle={"USER PROFILE"}
                        BlockedValue={"False"} 
                        DeletedValue={"False"} 
                        PhoneToVerify={"08068399612"} 
                        PhoneVerifyValue={"Verified"}
                        EmailToVerify={"hartjust553@gmail.com"}
                        EmailVerifyValue={"verified"}   
                    />
                </div>

            </div>
        </div>
    </>
  )
}

export default Dashboard