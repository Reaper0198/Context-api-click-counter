import ClickContext  from "./ClickContext";
import CounterControls from "./CounterControls";
import CounterDisplay from "./CounterDisplay";

export default function ClickCounter() {
    return (
        <>
        <ClickContext>
            <CounterDisplay />
            <CounterControls />
        </ClickContext>
        </>
    )
}