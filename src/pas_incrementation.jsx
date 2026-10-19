function Incrementation({setStepInc}){
    
    return(
        <div>
            <fieldset   style={{display:'flex',gap:'40px',justifyContent:"center"}}><legend>Pas D'Incrementation</legend>
                <button style={{backgroundColor:'blue',color:'white',width:'60px'}} onClick={()=>setStepInc(1)}>1</button>
                <button style={{backgroundColor:'blue',color:'white',width:'60px'}} onClick={()=>setStepInc(2)}>2</button>
                <button style={{backgroundColor:'blue',color:'white',width:'60px'}} onClick={()=>setStepInc(3)}>3</button>
                <button style={{backgroundColor:'blue',color:'white',width:'60px'}} onClick={()=>setStepInc(4)}>4</button>
            </fieldset>
            <br />
        </div>
        );
}
export default Incrementation;