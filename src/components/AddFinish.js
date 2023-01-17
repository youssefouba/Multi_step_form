import React from 'react'

const AddFinish = ({title,price,smbol}) => {
  return (
    <div className='dflex addFinish'>
        <p>{title}</p>
        <span>+${price}/{smbol}</span>
    </div>
  )
}

export default AddFinish