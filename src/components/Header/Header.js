import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css'

const Header = () => {
    return(
        <div className="header-link">
            <Link to="/moviecart" className="link">View Nominations</Link>
        </div>
    );
}

export default Header;
