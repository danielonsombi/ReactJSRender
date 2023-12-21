import React from 'react'

export const ChildThree = ({children, name}) => {
    console.log('ChildThree Component')
    return (
        <div>
            {children} {name}
        </div>
    )
}

export const MemoizedChildThree = React.memo(ChildThree)

