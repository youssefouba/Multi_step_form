import React from "react";
import Plan from "./Plan";
import Arcade from "../assets/images/icon-arcade.svg";
import Advanced from "../assets/images/icon-advanced.svg";
import Pro from "../assets/images/icon-pro.svg";
import { useState ,useEffect,useRef} from "react";
import { useDispatch, useSelector } from "react-redux";
import { info } from "../features/user";

const PlanStep = () => {
  const user=useSelector(e=>e.user.value);
  const [yearly, setYearly] = useState({
    arcade: 90,
    advanced: 120,
    pro: 150,
  });
  const [monthly, setMonthly] = useState({
    arcade: 9,
    advanced: 12,
    pro: 15,
  });
  const [switchOff, setSwitch] = useState(false);
  const [plan, setPlan] = useState({
    arcade: true,
    advanced: false,
    pro: false,
  });
  const dispatch=useDispatch();
  const refSwitch=useRef();
  useEffect(()=>{
    if(user.plantime=="Yearly"){
      setSwitch(true);
      refSwitch.current.checked=true;
  }
    switch(user.plan){
      case "advanced":
        setPlan({arcade: false,advanced: true,pro: false});
        break;
      case "pro":
        setPlan({arcade: false,advanced: false,pro: true});
        break;
    }
  },[])
  useEffect(()=>{
    var t=0;
    var palntitle,price,plant;
    Object.values(plan).map((e,i)=>{if(e==true)t=i;});
    Object.keys(plan).map((e,i)=>{if(i==t)palntitle=e;});
    if(!switchOff){
      Object.values(monthly).map((e,i)=>{if(i==t)price=e;});
      plant="Monthly";
    }
    else{
      Object.values(yearly).map((e,i)=>{if(i==t)price=e;});
      plant="Yearly";
    }
    dispatch(info({...user,plan:palntitle,price:price,plantime:plant}));

  },[user.nextClick,plan,switchOff]);
  

  return (
    <div className="Plan info">
      <h2>Select your plan</h2>
      <p>You have the option of monthly or yearly billing.</p>
      <div className="plansCrads">
        <div onClick={()=>setPlan({arcade: true,advanced: false,pro: false,})}>
          <Plan
            img={Arcade}
            title={"Arcade"}
            price={switchOff ? yearly.arcade + "/yr" : monthly.arcade + "/mo"}
            switchOff={switchOff}
            selected={plan.arcade}
          />
        </div>
        <div onClick={()=>setPlan({arcade: false,advanced: true,pro: false,})}>
          <Plan
            img={Advanced}
            title={"Advanced"}
            price={
              switchOff ? yearly.advanced + "/yr" : monthly.advanced + "/mo"
            }
            switchOff={switchOff}
            selected={plan.advanced}
          />
        </div>
        <div onClick={()=>setPlan({arcade: false,advanced: false,pro: true,})}>
          <Plan
            img={Pro}
            title={"Pro"}
            price={switchOff ? yearly.pro + "/yr" : monthly.pro + "/mo"}
            switchOff={switchOff}
            selected={plan.pro}
          />
        </div>
      </div>
      <label for="plan" className="switch">
        <span className={!switchOff?"switOn":""}>Monthly</span>
        <input
          type="checkbox"
          name="plan"
          id="plan" ref={refSwitch}
          onChange={() => setSwitch(!switchOff)}
        />
        <span className={switchOff?"switOn":""}>Yearly</span>
      </label>
    </div>
  );
};

export default PlanStep;
