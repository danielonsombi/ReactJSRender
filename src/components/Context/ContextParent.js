import React, {useState, useContext} from 'react'
// import { ChildA } from './ContextChildren'
import { MemoizedChildA } from './ContextChildren'

export const CountContext = React.createContext()

const CountProvider = CountContext.Provider

const ContextParent = () => {
    const [count, setCount] = useState(0)

    console.log('ContextParent Render')
    return (
        <div>
            <button onClick={()=>setCount(c => c + 1)}>Count {count}</button>
            <CountProvider value={count}>
                <MemoizedChildA/>
            </CountProvider>
        </div>
    )
}

export default ContextParent
