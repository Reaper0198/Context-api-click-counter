import { useContext } from "react"
import ClickContext, { ClickCounterContext } from "./ClickContext"

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
            <button onCanPlay={increaseClick}>click me to increase</button>
            <button onCanPlay={decreaseClick}>click me to decrease</button>
        </div>
    )
}