import React, {useState} from 'react'

const initState = ['Bruce', 'Wayne']

const ArrayUseSatte = () => {
    const [persons, setPersons] = useState(initState)

    const handleClick = () => {
        // persons.push('Daniel')
        // persons.push('Onsombi')
        // setPersons(persons)

        const newPersons = [...persons]
        newPersons.push('Daniel')
        newPersons.push('Onsombi')
        setPersons(newPersons)
    }
    return (
        <div>
            <button onClick={handleClick}>Click</button>
            {
                persons.map(person => (
                    <div key={person}>{person}</div>
                ))
            }
        </div>
    )
}

export default ArrayUseSatte
