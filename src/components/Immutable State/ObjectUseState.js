import React, {useState} from 'react'

const initialState = {
    fname: 'Bruce',
    lname: 'Wayne'
}


const ObjectUseState = () => {
    const [person, setPerson] = useState(initialState)

    const changeName = () => {
        // person.fname = 'Daniel'
        // person.lname = 'Onsombi'
        // setPerson(person)

        const newPerson = {...person}
        newPerson.fname = 'Daniel'
        newPerson.lname = 'Onsombi'
        setPerson(newPerson)
    }

    console.log('ObjectUseState Render')

    return (
        <div>
            <button onClick={changeName}>{person.fname} {person.lname}</button>
        </div>
    )
}

export default ObjectUseState
