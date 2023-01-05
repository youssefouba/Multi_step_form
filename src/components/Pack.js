import React from 'react'

const Pack = ({title,text,price}) => {
  return (
    <label className='dflex pack' for={title}>
        <div className='dflex'>
          <input className='checkMark' type="checkbox" name={title} id={title} />
        <div className='title'>
            <h3>{title}</h3>
            <p>{text}</p>
        </div>  
        </div>
        
        <span>+${price}/yr</span>
    </label>
  )
}

export default Pack