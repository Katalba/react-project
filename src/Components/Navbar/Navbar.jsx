import CartWidget from "../CartWidget/CartWidget";
import Secciones from "./Secciones/Secciones";

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="index.html">
                    <img src="img/LOGO.png" height="50px" alt="logo" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <Secciones/>
                        <CartWidget/>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;