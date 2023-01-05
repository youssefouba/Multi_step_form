import Steps from "./components/Steps";
import InfoStep from "./components/InfoStep";
import NavigationButton from "./components/NavigationButtons"
import ThankyouStep from "./components/ThankyouStep"
import AddonsStep from "./components/AddonsStep"
import Finishing from "./components/Finishing";
import PlanStep from "./components/PlanStep"
import { useState } from "react";
function App() {
  const [page,setPage]=useState(0);
  const PageDisplay=()=>{
    switch(page){
      case 0:
        return <InfoStep/>
      case 1:
        return <PlanStep/>
      case 2:
        return <AddonsStep/>
      case 3:
        return <Finishing/> 
      case 4:
        return <ThankyouStep/>
    }
  }
  return (
    <main>
      <div className="Container">
        <Steps/>
        <div className="content">
        {PageDisplay()}

        {page !=4 && <NavigationButton/>} 
        </div>
      </div>
      
    </main>
  );
}

export default App;
