import { useState } from "react";
import Incremention from "./pas_incrementation";
import Decrementation from "./pas_decrementation";
function Counter(){

    const [Count,setCount]=useState(0);
    const [StepInc,setStepInc]=useState(1);
    const [StepDec, setStepDec]=useState(1);


    function Incrementer() {
        setCount(Count + StepInc);
    }

     function Decrementer(){
        setCount(Count - StepDec);
    }
    
    function Renitialiser(){
        setCount(0);
        setStepDec(1);
        setStepInc(1);
    }



    return(
        <div style={{display:"flex",justifyContent:"center",flexDirection:'column',gap:'20px'}}>
            <div style={{border:'1px solid black',textAlign:'center',padding:'20px',margin:'20px auto',width:'50%'}}>
                <p>{Count}</p>
            </div>
            <div style={{display:'flex',gap:'40px',justifyContent:"center"}}>
                <button style={{backgroundColor:'blue',color:'white'}} onClick={Incrementer}>Incrementer</button>
                <button style={{backgroundColor:'blue',color:'white'}} onClick={Decrementer}>Decrementer</button>
                <button style={{backgroundColor:'blue',color:'white'}} onClick={Renitialiser}>Renitisliser</button>
            </div>
            <Incremention setStepInc={setStepInc} />
            <Decrementation setStepDec={setStepDec} />          
        </div>
    );

}
export default Counter;