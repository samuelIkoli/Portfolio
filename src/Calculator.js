import React, { useState } from 'react'

function Calculator() {

    const [calc, setCalc] = useState("");
    // const [result, setResult] = useState("");
    const ops = ['+', '-', '/', '*', '.'];

    const updateCalc = (value) => {
        if ((ops.includes(value) && calc === '') || (ops.includes(value) && ops.includes(calc[calc.length - 1])))
            return;
        if (calc.length === 30)
            return;
        setCalc(calc + value);
    }
    const AC = () => {
        setCalc('')
    }

    const delCalc = () => {
        const val = calc.slice(0, -1)
        setCalc(val)
    }

    const evalCalc = () => {
        if (calc === '' || ops.includes(calc[calc.length - 1]))
            return;
        setCalc(eval(calc).toString())
    }

    return (
        <div className='calculator mt-5 w-50 flex container'>
            <div className="screen bg-dark text-end">
                {calc || '0'}
            </div>
            <div className="operators mt-2">
                <button onClick={() => { delCalc() }} className="col-4">BACK</button>
                <button onClick={AC} className="col-4">AC</button>
                <button onClick={() => { updateCalc('+') }} className="col-4">+</button>
                <button onClick={() => { updateCalc('-') }} className="col-4">-</button>
                <button onClick={() => { updateCalc('/') }} className="col-4">/</button>
                <button onClick={() => { updateCalc('*') }} className="col-4">*</button>
            </div>
            <div className="numpad">
                <button onClick={() => { updateCalc('1') }} className="col-4">1</button>
                <button onClick={() => { updateCalc('2') }} className="col-4">2</button>
                <button onClick={() => { updateCalc('3') }} className="col-4">3</button>
                <button onClick={() => { updateCalc('4') }} className="col-4">4</button>
                <button onClick={() => { updateCalc('5') }} className="col-4">5</button>
                <button onClick={() => { updateCalc('6') }} className="col-4">6</button>
                <button onClick={() => { updateCalc('7') }} className="col-4">7</button>
                <button onClick={() => { updateCalc('8') }} className="col-4">8</button>
                <button onClick={() => { updateCalc('9') }} className="col-4">9</button>
                <button onClick={() => { updateCalc('.') }} className="col-4">.</button>
                <button onClick={() => { updateCalc('0') }} className="col-4">0</button>
                <button onClick={() => { evalCalc() }} className="col-4">=</button>

            </div>
        </div>
    )
}

export default Calculator