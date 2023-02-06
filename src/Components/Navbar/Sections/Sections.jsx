import { Link } from "react-router-dom";
const Sections = () => {
    return (
        <>
            <li className="nav-item">
                <Link className="nav-link" aria-current="page" to={'/'}>Inicio</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={'/categoria/jeans'}>Jeans</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={'/categoria/remeras'}>Remeras</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={'/categoria/vestidos'}>Vestidos</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={'/categoria/accesorios'}>Accesorios</Link>
            </li>
        </>
    );
}

export default Sections;
