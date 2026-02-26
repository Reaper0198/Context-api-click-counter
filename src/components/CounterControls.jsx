import { useContext } from "react"
import { ClickCounterContext } from "./ClickContext"

export default function CounterControls() {

    const {setClickCounter} = useContext(ClickCounterContext);

    const increaseClick = () => {
        setClickCounter(prev => prev + 1);
    }

    const decreaseClick = () => {
        setClickCounter(prev => prev - 1);
    }

    return (
        <div>
            <button onClick={increaseClick}>click me to increase</button>
            <button onClick={decreaseClick}>click me to decrease</button>
        </div>
    )
}