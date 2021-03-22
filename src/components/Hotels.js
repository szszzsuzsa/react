import React from "react";
import { useState } from "react";

const Hotels = ({ hotel }) => {

    const [showDetails, setShowDetails] = useState(false)

    const setDetails = () => {
        setShowDetails(!showDetails)
    }

    return (
        <div>
            {hotel.name} <br />
            {showDetails && hotel.details}
            <p>
                <button onClick={setDetails}>{showDetails ? 'show less' : 'show more'}</button>
            </p>
        </div>
    )
}

export default Hotels;