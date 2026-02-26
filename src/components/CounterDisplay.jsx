import { useContext } from "react"
import { ClickCounterContext } from "./ClickContext"

export default function CounterDisplay() {

    const { clickCounter } = useContext(ClickCounterContext);

    return (
        <>
            <div>
                clicks : {clickCounter}
            </div>
        </>
    )
}