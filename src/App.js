import React, { useState } from 'react';
import Header from './Components/Header'
import Image from './Components/Image'
import logoOg from './img/logo.png'

const App = () => {

    const [helpText, setClick] = useState("Help Text");
    const [userData, setInput] = useState("");

    const inputClick = () => {
        setClick("Changed")
        console.log("Click")
    };

    return (
        <>
            <Header title={"Shapka saita"} />

            <h1>{helpText}</h1>
            <h1>{userData}</h1>
            <input value={userData} onChange={event => setInput(event.target.value)} placeholder={helpText} onClick={inputClick} />
            <p>{helpText === "Help Text!" ? "Yes" : "no"}</p>
            <div>
                BROOOOOOOOOOOOOO
            </div>
            <Image importedImg={logoOg} altParam={"Image"} />
        </>
    )
};

export default App;