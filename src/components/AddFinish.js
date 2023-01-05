import React from 'react'

const AddFinish = ({title,price}) => {
  return (
    <div className='dflex addFinish'>
        <p>{title}</p>
        <span>+${price}/yr</span>
    </div>
  )
}

export default AddFinish