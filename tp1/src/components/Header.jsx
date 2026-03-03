import style from "./Header.module.css";


function Header () {
    return(
     <header>
        
        <div className={style.logo}>eComm App</div>
        <nav className={style.nav}>
            <a href="#home">Home</a>
            <a href="#products">Products</a>
            <a href="#aboutUS">About US</a>
            <a href="#contact">Contact</a>
        </nav>
     </header>
    )
}
export default Header