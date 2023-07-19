import React, {useEffect, useState} from 'react';

const Button = (props) => {

    const [click, setBtnClick] = useState(0); 

    useEffect(() => {
        document.title = `Vi tiknuli ${click} ras`
    });

    return (
      
      <button onClick={() => setBtnClick(click + 1 )}>
            {props.text}
            {click}
      </button>
      
    );
    
};

Button.defaultProps = {
    text: "Button"
};

export default Button;