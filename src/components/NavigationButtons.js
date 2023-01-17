import React from 'react'
import { useDispatch} from 'react-redux'
import { next } from '../features/page'
import { useSelector } from 'react-redux'
import { back } from '../features/page'
import { info } from '../features/user'


const NavigationButtons = () => {
  const page=useSelector((e)=>e.page.value);
  const user=useSelector(e=>e.user.value)
  const dispatch=useDispatch();
  const nextClick=()=>{
    console.log(user)
    dispatch(info({...user,nextClick:true}));
    if(user.emailValid && user.phoneValid && user.name.length>2 && page==0){
      dispatch(next());
      dispatch(info({...user,nextClick:false}))
    }
    if(page!=0){
      dispatch(next());
    }
    
  }
  return (
    <div className={page==0?'navigation btnRight':'navigation'}>
      {page!=0 &&<button className='btn1' onClick={()=>dispatch(back())}>Go Back</button>}
      <button className='btn2'onClick={nextClick}>{page==3?"Conforme":"Next Step"}</button>
    </div>
  )
}

export default NavigationButtons