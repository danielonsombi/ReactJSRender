import React, {useState} from 'react'

export const CountContext = React.createContext()
const CountProvider = CountContext.Provider

export const ContextParentTwo = ({children}) => {
    const [count, setCount] = useState(0)

    console.log('ContextParentTwo Render')
    
    return (
        <>
            <button onClick={()=>setCount(c => c + 1)}>Count {count}</button>
            <CountProvider value={count}>
                {children}
            </CountProvider>
        </>
    )
}
