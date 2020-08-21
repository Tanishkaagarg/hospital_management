import React from 'react';
import { NavLink} from "react-router-dom";


const Card = ({title, imgsrc, desc}) => {
    return ( 
    <>
        <div className="col-md-4 col-10 mx-auto">
            <div className ="card">
                <img src={imgsrc} className="card-img-top" alt="Hello" />
                    <div className ="card-body">
                        <h5 className="card-title font-weight-bold">{title}</h5>
                        <p className ="card-text">{desc}</p>
                        <NavLink to="" className="btn btn-primary">Read More</NavLink>
                    </div>
            </div>
        </div>    

    </>
    );
};

export default Card;
