import CartWidget from "../CartWidget/CartWidget";
import Sections from "./Sections/Sections";
import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <div className="nav_bar">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src="../img/LOGO.png" alt="logo" width="200px" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <Sections />
                            <CartWidget amount={3} />
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;