import React from "react";
import Pack from "./Pack";

const AddonsStep = () => {
  return (
    <div className="addons info">
      <h2>Pick add-ons</h2>
      <p>Add-ons help enhance your gaming experience.</p>
      <div className="packs">
        <Pack title="Online service" text="Access to multiplayer games" price="10" add="onlineService"/>
        <Pack title="Larger storage" text="Extra 1TB of cloud save" price="20"/>
        <Pack title="Customizable profile" text="Custom theme on your profile" price="20"/>
      </div>
    </div>
  );
};

export default AddonsStep;
