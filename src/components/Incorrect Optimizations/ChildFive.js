import React from 'react'

export const ChildFive = ({name, person}) => {
    console.log('ChildFive Render')
  return (
    <div>
      {/* Hello {name}  */}
        Hello {name}  {person.fname} {person.lname}
    </div>
  )
}

export const MemoizedChildFive = React.memo(ChildFive)
