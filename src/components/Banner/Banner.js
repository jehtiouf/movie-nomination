import React from 'react';
import './Banner.css';

const Banner = ({numNominations}) => {
    console.log(numNominations)
    return(
        <div className="wrap-banner">
            <h5 className="banner-text">You've made {numNominations} Nomination(s)!</h5>
        </div>
    )
}

export default Banner;