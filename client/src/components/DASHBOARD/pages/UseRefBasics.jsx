import React, { useRef, useEffect } from 'react'

const UseRefBasic = () => {
    const refContainer = useRef(null)
    const divContainer = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(refContainer.current.value);
        console.log(divContainer.current);
    }

    useEffect(() => {
        refContainer.current.focus()
    })

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="container">
                    <input className="form-control" name="inputName" type="text" ref={refContainer} placeholder="Text here..." />
                    <button className="btn" type="submit">Submit</button>
                </div>
            </form>
            <div ref={divContainer}>Hello world</div>
        </>
    )
}

export default UseRefBasic