import React, { useEffect, useState } from "react";
import Pack from "./Pack";
import { useDispatch } from "react-redux";
import user, { info } from "../features/user";
import { useSelector } from "react-redux";


const AddonsStep = () => {
  const dispatch=useDispatch();
  const user=useSelector((e)=>e.user.value)
  const [paks, setPaks] = useState(user.packs);
  const chengeClick = title => {
    console.log(paks);
    setPaks(paks.map(e => (e.title === title ? { ...e, addon: !e.addon } : e)));
  };

  useEffect(()=>{
    paks.map((e)=>{
        dispatch(info({...user,packs:paks}));
    })
  },[paks])

  return (
    <div className="addons info">
      <h2>Pick add-ons</h2>
      <p>Add-ons help enhance your gaming experience.</p>
      <div className="packs">
        {paks.map((e, i) => (
          <Pack key={i} packs={e} chengeClick={chengeClick} />
        ))}
      </div>
    </div>
  );
};

export default AddonsStep;
