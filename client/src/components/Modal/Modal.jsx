import "../../components/Modal/Modal.css"


// MODAL COMPONENT FOR USER VERIFICATION 
const Modal = ({ modalTitle, BlockedValue, DeletedValue, PhoneToVerify, PhoneVerifyValue, EmailToVerify, EmailVerifyValue,  }) => {

  return (
    <>
      <div className="verification border px-3 py-5">
          <p className='text-center'>{modalTitle}</p>
          <div className="verify py-4">
            <span className='d-flex justify-content-between my-2'>
              <p>Blocked :</p>
              <p>{BlockedValue}</p>
            </span>
            <span className='d-flex justify-content-between my-2'>
              <p>Deleted :</p>
              <p>{DeletedValue}</p>
            </span>
            <span className='d-flex justify-content-between my-2'>
              <p>Phone : {PhoneToVerify}</p>
              <p>{PhoneVerifyValue}</p>
            </span>
            <span className='d-flex justify-content-between my-2'>
              <p>Email : {EmailToVerify}</p>
              <p>{EmailVerifyValue}</p>
            </span>
          </div>
        </div>
    </>
  )
}

export default Modal