import React from 'react'

const Step = ({step,title,active}) => {
  return (
    <div className='Step'>
        <span className={active?"stepNumber active":"stepNumber"}>{step}</span>
        <div className='stepInfo'>
            <span>STEP {step}</span>
            <p>{title}</p>
        </div>
    </div>
  )
}

export default Step