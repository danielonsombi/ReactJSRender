import React from 'react'

export const ChildTwo = () => {
    console.log('ChildTwo Component')
    return (
        <div>
            ChildTwo Component
        </div>
    )
}

export const MemoizedChildTwo = React.memo(ChildTwo)

