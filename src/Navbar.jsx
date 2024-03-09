import logo from "./assets/icon-white2.png"

const Navbar = () => {
    return ( 
        <>
        <nav>
            <div className="logo">
                <img src={logo}></img>
                <h2>Pomoclone</h2>
            </div>
            <div>
                <button>Report</button>
                <button>Setting</button>
                <button>Login</button>
            </div>
        </nav>
        <div className="progress-bar"></div>
        </>
     );
}
 
export default Navbar;