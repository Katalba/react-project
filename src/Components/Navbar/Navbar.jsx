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
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="index.html">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="html/jeans.html">Jeans</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="html/remeras.html">Remeras</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="html/vestidos.html">Vestidos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="html/accesorios.html">Accesorios</a>
                        </li>
                        <li className="nav-item">
                            <a id="show_cart" className="nav-link" href="#"><i className="fa-solid fa-cart-shopping" /></a>
                            <div className="container" id="cart">
                                <table className="table table-default">
                                    <thead>
                                        <tr>
                                            <td>Producto</td>
                                            <td>Cantidad</td>
                                            <td>Precio</td>
                                            <td />
                                        </tr>
                                    </thead>
                                    <tbody id="t-body">
                                    </tbody>
                                </table>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;