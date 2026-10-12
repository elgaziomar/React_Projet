function Detail(){
    let detailstyle={display:'flex',flexDirection:'column',alignItems:'center',gap:'20px',border:'1px solid solid black', padding:'15px',backgroundColor:'white' ,width:'30%',borderRadius:'5px'};
    return(
        <div style={detailstyle}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ561SHJpD3XLe7sEflIyE3YAJEBmOQEV7IEdYayyh60Q&s=10' height={255} width={255} alt="img_personne"></img><br />
            <p>Mohamed el bakkali</p>
            <hr style={{width:'100%'}}/>
            <p>Student ID :3210000001</p>
            <p>Class : 4</p>
            <p>Section : A</p>
        </div>
    )
}
export default Detail;