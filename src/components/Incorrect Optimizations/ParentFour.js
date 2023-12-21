import React, {useState, useMemo, useCallback}  from 'react'
import { MemoizedChildFive } from './ChildFive';


export const ParentFour = ( ) => {
    const [count, setCount] = useState(0);

    const [name, setName] = useState('Daniel')

    const person = {
        fname: 'Bruce',
        lname: 'Wayne'
    }


    //For better optimization, use the UseMemo hook as below. And since we have no dependencies, then pass an empty array as below:
    const memoizedPerson = useMemo(() => person, [])

    const handleClick = () => {}

    //Memoized call back to handle function references.
    const memoizedHandlClck = useCallback(handleClick, [])

    console.log('ParentFour Render')
    return (
        <div>
            <button onClick={() => setCount(c => c + 1)}>Count - {count}</button>
            <button onClick={() => setName('Onsombi')}>Change Name</button>
            <MemoizedChildFive name = {name} person = {memoizedPerson} handleClick = {memoizedHandlClck}/>
        </div>
    )
}