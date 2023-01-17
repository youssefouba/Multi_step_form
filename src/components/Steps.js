import React from 'react'
import Step from "./Step"
import { useSelector } from 'react-redux'

const Steps = () => {
  const page=useSelector((e)=>e.page.value)
  return (
    <div className='Steps'>
      <Step step={1} title={"YOUR INFO"} active={page==0}/>
      <Step step={2} title={"SELECT PLAN"} active={page==1}/>
      <Step step={3} title={"ADD-ONS"} active={page==2}/>
      <Step step={4} title={"SUMMARY"} active={page>=3}/>
      
    </div>
  )
}

export default Steps