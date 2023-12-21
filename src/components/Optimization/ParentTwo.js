import React, {useState}  from 'react'
import { MemoizedChildTwo } from './ChildTwo';
//import { ChildTwo } from './ChildTwo';


export const ParentTwo = ( ) => {
    const [count, setCount] = useState(0);

    const [name, setName] = useState('Daniel')

    console.log('ParentTwo Render')
    return (
        <div>
            <button onClick={() => setCount(c => c + 1)}>Count - {count}</button>
            <button onClick={() => setName('Onsombi')}>Change Name</button>
            {/* <ChildTwo name = {name}/> */}
            <MemoizedChildTwo name = {name}/>
        </div>
    )
}

