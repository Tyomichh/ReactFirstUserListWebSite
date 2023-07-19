import React from 'react';
import Button from './Button';

const Header = (props) => {
    console.log(props);
    return (
        <>
        <div>{props.title}</div>
        <Button text="Click me!" />
        <Button/>
        </>
    )
};

export default Header;