import React from 'react';
import "../Styles/header.css";


const Header = (props) => {
    return (
        <>
        <div className="header">{props.title}</div>
        </>
    )
};

export default Header;