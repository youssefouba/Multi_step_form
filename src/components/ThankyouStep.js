import React from 'react'
import thankyou from '../assets/images/icon-thank-you.svg'

const ThankyouStep = () => {
  return (
    <div className='thanks'>
        <img src={thankyou} alt="Subscription confirmed"/>
        <h2>Thank you!</h2>
        <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
    </div>
  )
}

export default ThankyouStep