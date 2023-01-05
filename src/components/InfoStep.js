import React from 'react' 

const InfoStep = () => {
  return (
    <div className='info'>
      <h2>Personal info</h2>
      <p>Please provide your name,email address,and phone number.</p>
      <div className='form'>
        <div className='fields'>
          <div className='dflex'>
            <label>Name</label>
            <span>This field is required</span>
          </div>
          <input type="text" placeholder='e.g. Stephe king'/>
        </div>
        <div className='fields'>
          <div className='dflex'>
            <label>Email Address</label>
            <span>This field is required</span>
          </div>
          <input type="text" placeholder='e.g. Stepheking@lorem.com'/>
        </div>
        <div className='fields'>
          <div className='dflex'>
            <label>Phone Number</label>
            <span>This field is required</span>
          </div>
          <input className='erorr' type="text" placeholder='e.g. +1 234 567 890'/>
        </div>

      </div>
    </div>
  )
}

export default InfoStep