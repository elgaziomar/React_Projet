function Header(){
    let headerstyle={display:'flex',alignItems:'center',gap:'15px'};
    return(
       <div style={headerstyle}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ561SHJpD3XLe7sEflIyE3YAJEBmOQEV7IEdYayyh60Q&s=10' height={40} width={40} alt="picture_person"></img>
        <h1>Hello Mohammad El Bakkali</h1><br />
       </div>
    );
}
export default Header;