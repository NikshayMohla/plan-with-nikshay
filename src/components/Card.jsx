import React, { useState } from "react";

function Card({ id, image, info, price, name, removeTour }) {
    const [readmore, setReadmore] = useState(false);
    const description = readmore ? info : `${info.substring(0, 200)}...`;

    function readmoreHandler() {
        setReadmore(!readmore);
    }

    return (
        <div className="card">
            <img src={image} className="image" alt={name} />
            <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour-price">{price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>
                <div className="description">
                    {description}
                    <span onClick={readmoreHandler} className="readmore">
                        {readmore ? 'show less' : 'read more'}
                    </span>
                </div>
            </div>
            <button onClick={() => removeTour(id)}>Not Interested</button>
        </div>
    );
}

export default Card;
