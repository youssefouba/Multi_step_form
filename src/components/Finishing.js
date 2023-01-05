import React from 'react'
import AddFinish from './AddFinish'

const Finishing = () => {
  return (
    <div className='Finish info'>
      <h2>Finishing up</h2>
      <p>Double-check everything looks OK before confirming.</p>
      <div className="payout">
        <div className='dflex title'>
            <div>
              <h3>Arcade (Monthly)</h3>
              <p>Change</p>
            </div>
            <span>$9/mo</span>
        </div>
        <AddFinish title="Online service" price="1"/>
        <AddFinish title="Larger storage" price="2"/>
        <AddFinish title="expale for testing" price="5"/>

      </div>
      <div className='dflex total'>
      <p>Total (per month)</p>
      <span>+$12/mo</span>
      </div>
    </div>
  )
}

export default Finishing