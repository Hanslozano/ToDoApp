
import { useState } from "react";


export default function CounterProgram () {

const [count, setCount] = useState(0)

const increase = () =>
 {
    setCount( c => c  +1)
    setCount( c => c  +1)
    setCount( c => c  +1)
 }

 const Decrease = () =>
 {
    setCount(count  -1)
 }

const reset = () =>
 {
    setCount(0)
 }



return (

    <div>
        <p>{count}</p>
        <button onClick={increase}>Increase</button>
        <button onClick={reset}>Reset</button>
        <button onClick={Decrease}>Decrease</button>
    </div>

)

}