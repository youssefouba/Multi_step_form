import React from 'react'

const Plan = ({img,title,price,switchOff,selected}) => {
  return (
    <div className={selected?'planCard planClick':'planCard'}>
        <img src={img} alt="Arcade" />
        <div className='title'>
            <h3>{title}</h3>
            <p>${price}</p>
            {switchOff &&<p style={{color:"#174a89"}}>2 months free</p>}
        </div> 
    </div>
  )
}

export default Plan