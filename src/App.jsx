import React, { useState } from 'react';
import './lightstyle.css';
import './darkstyle.css';


const App = () => {

    const[currTheme, setTheme] = useState(true);
    const[hr, setHr] = useState(0);
    const[min, setMin] = useState(0);
    const[sec, setSec] = useState(0);

    setInterval(() => {
        let d = new Date();
        let hourTime= d.getHours();
        let minTime= d.getMinutes();
        let secTime= d.getSeconds();
        setHr(30*hourTime+(minTime/2));
        setMin(6*minTime);
        setSec(6*secTime);
      }, 1000);
    

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
        if(currTheme===true) {
            setBtnStyle(btnStylelight);
            setTheme(false);
        }else if(currTheme===false) {
            setBtnStyle(btnStyledark);
            setTheme(true);
        }
    }

    return (
        <>
          <button className='togglebtn' onClick={toggleTheme} style={btnStyle}><ion-icon name={currTheme ? 'sunny-outline':'moon-outline'}></ion-icon></button>
          <div className={currTheme ? 'mainpagedark':'mainpagelight'}>
            <div className={currTheme ? 'clockdark':'clocklight'}>
              <div className={currTheme ? 'hourdark':'hourlight'} style={{transform:`rotate(${hr}deg)`}}></div>
              <div className={currTheme ? 'minutedark':'minutelight'} style={{transform:`rotate(${min}deg)`}}></div>
              <div className={currTheme ? 'seconddark':'secondlight'} style={{transform:`rotate(${sec}deg)`}}></div>
            </div>
          </div>
        </>
      );
}

export default App;