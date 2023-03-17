import { useState } from "react";

function ListView() {

    const [listView, setListView] = useState([
        "iron man",
        "avengers",
        "batman",
        "antman",
        "spiderman"
    ])

    return (
        <>
            <div className="container">
                <h1 className="text-danger text-uppercase">list</h1>
                <div>
                    {
                        listView.map((item) => {
                            return <h1>{item}</h1>
                        })
                    }
                </div>
            </div>
        </>
    )

}

export default ListView