import React, { useEffect,useState } from 'react'
import AddFinish from './AddFinish'
import { back } from '../features/page'
import { useDispatch, useSelector } from 'react-redux'
import { info } from '../features/user'

const Finishing = () => {
  const dispatch=useDispatch();
  const user=useSelector(e=>e.user.value);
  const smbol=user.plantime=="Yearly"?"yr":"mo";
  const [price,setprice]=useState(0);
useEffect(()=>{
  var t=0;
  user.packs.map((e)=>{
    if(e.addon){
      {(user.plantime).toString().toLowerCase()=='monthly'?t+=price+e.price.monthly:t+=price+e.price.yearly};
  }} )
  setprice(t+user.price);
  dispatch(info({...user,totalToPay:price}));
},[])
  return (
    <div className='Finish info'>
      <h2>Finishing up</h2>
      <p>Double-check everything looks OK before confirming.</p>
      <div className="payout">
        <div className='dflex title'>
            <div>
              <h3>Arcade (Monthly)</h3>
              <p onClick={()=>{dispatch(back());dispatch(back())}}>Change</p>
            </div>
            <span>${user.price}/{smbol}</span>
        </div>
    {
      user.packs.map((e,i)=>
        e.addon&&<AddFinish title={e.title} key={i} price={(user.plantime).toString().toLowerCase()=='monthly'?e.price.monthly:e.price.yearly} smbol={smbol}/>
        )
    }

      </div>
      <div className='dflex total'>
      <p>Total {user.plantime=="Yearly"?"(per year)":"(per month)"}</p>
      <span>+${price}/{smbol}</span>
      </div>
    </div>
  )
}

export default Finishing