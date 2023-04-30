import { useState } from 'react';
import './darkstyle.css';


const Appdark = () => {

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



  return (
    <>
      <div className='mainpagedark'>
        <div className='clockdark'>
          <div className='hourdark' style={{transform:`rotate(${hr}deg)`}}></div>
          <div className='minutedark' style={{transform:`rotate(${min}deg)`}}></div>
          <div className='seconddark' style={{transform:`rotate(${sec}deg)`}}></div>
        </div>
      </div>
    </>
  );
}

export default Appdark;
