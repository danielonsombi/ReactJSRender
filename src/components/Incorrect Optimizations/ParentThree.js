import React, {useState}  from 'react'
import { MemoizedChildThree } from './ChildThree';
import { MemoizedChildFour } from './ChildFour';
//import { ChildThree } from './ChildThree';


export const ParentThree = ( ) => {
    const [count, setCount] = useState(0);

    const [name, setName] = useState('Daniel')

    console.log('ParentThree Render')
    return (
        <div>
            <button onClick={() => setCount(c => c + 1)}>Count - {count}</button>
            <button onClick={() => setName('Onsombi')}>Change Name</button>
            {/* <ChildThree name = {name}/> */}
            {/* <MemoizedChildThree name = {name}>
                <strong>Hello</strong>
            </MemoizedChildThree> */}
            <MemoizedChildFour name = {name}/>
        </div>
    )
}

