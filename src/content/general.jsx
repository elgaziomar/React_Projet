 function General(){
    let divstyle={padding:'20px',borderRadius:'2px',backgroundColor:'white',marginBottom:'30px'};
    let tablestyle={margin:'0 auto',width:'70%',border:'1px solid black',textAlign:'left',borderCollapse:'collpase'};
    let trstyle={borderBottom:'1px solid black'};
    let tdstyle={padding:'12px 10px',borderBottom:'1px solid black',borderRight:'1px solid black'};
    let ltdstyle={padding:'12px 10px',borderBottom:'1px solid'};
    return(
        <div style={divstyle}>
            <h1>General Information</h1>
            <table style={tablestyle}>
                <tr style={trstyle}>
                    <td style={tdstyle}>Roll</td>
                    <td style={tdstyle}>:</td>
                    <td style={ltdstyle}>125</td>
                </tr>
                <tr style={trstyle}>
                    <td style={tdstyle}>Academic Year</td>
                    <td style={tdstyle}>:</td>
                    <td style={ltdstyle}>2020</td>
                </tr>
                <tr style={trstyle}>
                    <td style={tdstyle}>Gender</td>
                    <td style={tdstyle}>:</td>
                    <td style={ltdstyle}>Male</td>
                </tr>
                <tr style={trstyle}>
                    <td style={tdstyle}>Religion</td>
                    <td style={tdstyle}>:</td>
                    <td style={ltdstyle}>Group</td>
                </tr>
                <tr style={trstyle}>
                    <td style={{borderRight:'1px solid black'}}>Blood</td>
                    <td style={{borderRight:'1px solid black'}}>:</td>
                    <td>B+</td>
                </tr>
            </table>
        </div>

    );

}
export default General;