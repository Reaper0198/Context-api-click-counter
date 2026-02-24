import { createContext, useState } from "react";

export const ClickCounterContext = createContext();

export default function ClickContext({children}){

    const [clickCounter, setClickCounter] = useState(0);
    
    return (
    <>
        <ClickCounterContext.Provider 
            value={{ clickCounter, setClickCounter }}>
        {children}
        </ClickCounterContext.Provider>
    </>
    )
}