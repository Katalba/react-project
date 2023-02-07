import { Link } from "react-router-dom";

const Categories = () => {
    return (
        <section className="d-flex">
            <Link to={'/categoria/jeans'}>
                <div className="categorie">
                    <img src="IMG/JEAN-PORTADA.webp" alt="jeans" />
                    <div className="title-categorie">
                        <h4>Jeans</h4>
                        <p>Ver todo</p>
                    </div>
                </div>
            </Link>
            <Link to={'/categoria/remeras'}>
                <div className="categorie">
                    <img src="img/REMERA-PORTADA.webp" alt="Remeras" />
                    <div className="title-categorie">
                        <h4>Remeras</h4>
                        <p>Ver todo</p>
                    </div>
                </div>
            </Link>
            <Link to={'/categoria/vestidos'}>
                <div className="categorie">
                    <img src="IMG/VESTIDO-PORTADA.webp" alt="Vestidos" />
                    <div className="title-categorie">
                        <h4>Vestidos</h4>
                        <p>Ver todo</p>
                    </div>
                </div>
            </Link>
            <Link to={'categoria/accesorios'}>
                <div className="categorie">
                    <img src="img/ACCESORIOS-PORTADA.webp" alt="Accesorios" />
                    <div className="title-categorie">
                        <h4>Accesorios</h4>
                        <p>Ver todo</p>
                    </div>
                </div>
            </Link>
        </section>
    );
}

export default Categories;
