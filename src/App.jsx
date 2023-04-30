import Appdark from './Appdark';
import Applight from './Applight';
import React, { useState } from 'react';


const App = () => {

    const[currTheme, setTheme] = useState("dark");

    const btnStyledark = {
        position: "absolute",
        left:"3%",
        marginTop:"20px",
        width:"50px",
        height:"50px",
        zIndex:"1000",
        borderRadius:"10px",
        outline:"none",
        backgroundColor:"#0a1627",
        color:"#fff",
        fontSize:"30px",
        verticalAlign:"middle",
        lineHeight: "50px"
    };

    const btnStylelight = {
        position: "absolute",
        left:"3%",
        marginTop:"20px",
        width:"50px",
        height:"50px",
        zIndex:"1000",
        borderRadius:"10px",
        outline:"none",
        backgroundColor:"#fff",
        color:"black",
        fontSize:"35px",
        verticalAlign:"bottom",
        lineHeight: "50px"
    };

    const[btnStyle, setBtnStyle] = useState(btnStyledark);

    const toggleTheme = () => {
        if(currTheme==="dark") {
            setBtnStyle(btnStylelight);
            setTheme("light");
        }else if(currTheme==="light") {
            setBtnStyle(btnStyledark);
            setTheme("dark");
        }
    }

    console.log(currTheme);

    if(currTheme==="dark") {
        return(
            <>
            <button className='togglebtn' onClick={toggleTheme} style={btnStyle}><ion-icon name="sunny-outline"></ion-icon></button>
            <Appdark/> 
            </>
        )
    }else if(currTheme==="light") {
    return(
        <>
        <button className='togglebtn' onClick={toggleTheme} style={btnStyle}><ion-icon name="moon-outline"></ion-icon></button>
        <Applight/> 
        </>
    )
    }
}

export default App;