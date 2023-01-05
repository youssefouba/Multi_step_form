import React from 'react'
import Step from "./Step"

const Steps = () => {
  return (
    <div className='Steps'>
      <Step step={1} title={"YOUR INFO"} active={true}/>
      <Step step={2} title={"SELECT PLAN"} active={false}/>
      <Step step={3} title={"ADD-ONS"} active={false}/>
      <Step step={4} title={"SUMMARY"} active={false}/>
      
    </div>
  )
}

export default Steps