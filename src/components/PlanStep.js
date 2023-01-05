import React from 'react'
import Plan from './Plan'
import Arcade from '../assets/images/icon-arcade.svg'
import Advanced from '../assets/images/icon-advanced.svg'
import Pro from '../assets/images/icon-pro.svg'
import { useState } from 'react'

const PlanStep = () => {
  const [yearly,setYearly]=useState({
    arcade:90,
    advanced:120,
    pro:150
  });
  const [monthly,setMonthly]=useState({
    arcade:9,
    advanced:12,
    pro:15
  });
  const [switchOff,setSwitch]=useState(false);
  return (
    <div className='Plan info'>
      <h2>Select your plan</h2>
      <p>You have the option of monthly or yearly billing.</p>
      <div className='plansCrads'>
        <Plan img={Arcade} title={"Arcade"} price={switchOff?yearly.arcade+"/yr":monthly.arcade+"/mo"} switchOff={switchOff}/>
        <Plan img={Advanced} title={"Advanced"} price={switchOff?yearly.advanced+"/yr":monthly.advanced+"/mo"} switchOff={switchOff}/>
        <Plan img={Pro} title={"Pro"} price={switchOff?yearly.pro+"/yr":monthly.pro+"/mo"} switchOff={switchOff}/>
      </div>
      <label for="plan" className='switch'>
        <span>Monthly</span>
        <input type="checkbox" name="plan" id="plan" onChange={()=>setSwitch(!switchOff)}/>
        <span>Yearly</span>
      </label>
    </div>
  )
}

export default PlanStep