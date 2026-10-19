function Decrementation({setStepDec}){
   
    return(
        <div>
            <fieldset style={{display:'flex',gap:'40px',justifyContent:"center"}}><legend>Pas de Decrementation</legend>
                <button style={{backgroundColor:'blue',color:'white',width:'60px'}} onClick={()=>setStepDec(1)}>1</button>
                <button style={{backgroundColor:'blue',color:'white',width:'60px'}} onClick={()=>setStepDec(2)}>2</button>
                <button style={{backgroundColor:'blue',color:'white',width:'60px'}} onClick={()=>setStepDec(3)}>3</button>
                <button style={{backgroundColor:'blue',color:'white',width:'60px'}} onClick={()=>setStepDec(4)}>4</button>
            </fieldset>
        </div>


    );
}
export default Decrementation;