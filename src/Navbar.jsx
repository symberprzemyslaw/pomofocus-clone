const Navbar = () => {
    return ( 
        <>
        <nav>
            <img src="./src/assets/icon-white2.png" className="logo"></img>
            <h2>Pomofocus</h2>
            <button>Report</button>
            <button>Setting</button>
            <button>Login</button>
        </nav>
        <div className="progress-bar"></div>
        </>
     );
}
 
export default Navbar;