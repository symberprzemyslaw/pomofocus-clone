const Navbar = () => {
    return ( 
        <>
        <nav>
            <div className="logo">
                <img src="./src/assets/icon-white2.png"></img>
                <h2>Pomofocus</h2>
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