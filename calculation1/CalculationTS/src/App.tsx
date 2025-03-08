//import { useState } from 'react'
import './App.css'
import {buttonClick,buttonClickActive,buttonClickExt,buttonClickMain} from './ScriptCalculate/calculate'

function App() {
  //const [count, setCount] = useState(0)
  return (
    <>
    
    <div className="MainBlock">
      <h1>Калькулятор</h1>
        <div className="ContainerCalculate">
            <div className="InputGraf">
              <input type="text" dir="ltr" id='InputCalculate' value={0}  onKeyPress={(event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}}/>
            </div>
            <div className="buttons">
              <div className="Line">
                <button className="but" value="%" onClick={buttonClick}>%</button>
                <button className="but" value="CE">CE</button>
                <button className="butExt" value="C" onClick={buttonClickExt}>C</button>
                <button className="butExt" value="del" onClick={buttonClickExt}>del</button>
              </div>
              <div className="Line">
                <button className="but" value="1/x" onClick={buttonClick}>1/x</button>
                <button className="but" value="pow" onClick={buttonClick}>pow</button>
                <button className="but" value="sqrt" onClick={buttonClick}>sqrt</button>
                <button className="but" value="/" onClick={buttonClickActive}>/</button>
              </div>
              <div className="Line">
                <button className="butMain" value="7" onClick={buttonClickMain}>7</button>
                <button className="butMain" value="8" onClick={buttonClickMain}>8</button>
                <button className="butMain" value="9" onClick={buttonClickMain}>9</button>
                <button className="but" value="X" onClick={buttonClickActive}>X</button>
              </div>
              <div className="Line">
                <button className="butMain" value="4" onClick={buttonClickMain}>4</button>
                <button className="butMain" value="5" onClick={buttonClickMain}>5</button>
                <button className="butMain" value="6" onClick={buttonClickMain}>6</button>
                <button className="but" value="-" onClick={buttonClickActive}>-</button>
              </div>
              <div className="Line">
                <button className="butMain" value="1" onClick={buttonClickMain}>1</button>
                <button className="butMain" value="2" onClick={buttonClickMain}>2</button>
                <button className="butMain" value="3" onClick={buttonClickMain}>3</button>
                <button className="but" value="+" onClick={buttonClickActive}>+</button>
              </div>
              <div className="Line">
                <button className="but" value='+/-' onClick={buttonClick}>+/-</button>
                <button className="butMain" value="0" onClick={buttonClickMain}>0</button>
                <button className="but" value="," onClick={buttonClick}>,</button>
                <button className="butExt" value="=" onClick={buttonClickExt}>=</button>
              </div>
            </div>
        </div>
    </div>   
    </>
  )
}

export default App
