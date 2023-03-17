import { useState } from "react"

function ShowData() {

    const [number, setNumber] = useState(0)

    function add() {
        setNumber(number + 1)
    }

    function minus() {
        // setNumber(number - 1)
        number == 0 ? setNumber(number) : setNumber(number - 1)
    }

    function reset() {
        setNumber(number*0
            )
    }

    return (
        <>
            <div className="container">
                <h1 className="text-danger text-uppercase pt-5">increment decrement </h1><br>
                </br>
                <br>
                </br>

                <h1 className="col-4 ps-5 text-center">{number}</h1>
                <br></br>
                <div className="col-8">
                    <button className="btn btn-dark col-3" onClick={add}>increment</button>
                    <button className="btn btn-dark ms-5 col-3" onClick={minus}>decrement</button>
                </div>
                <div className="col-4 d-flex justify-content-center">
                    <button className="btn btn-dark col-3 m-3" onClick={reset}>reset</button>
                </div>
            </div>
        </>
    )
}

export default ShowData