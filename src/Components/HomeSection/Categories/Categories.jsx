import { Link } from "react-router-dom";

const Categories = () => {
    return (
        <section className="d-flex">
            <Link to={'/categoria/jeans'}>
                <div className="categorie">
                    <img src="https://firebasestorage.googleapis.com/v0/b/valkiria-react.appspot.com/o/JEAN-PORTADA.webp?alt=media&token=587789a5-718a-4ff7-a89a-e274c5916767" alt="jeans" />
                    <div className="title-categorie">
                        <h4>Jeans</h4>
                        <p>Ver todo</p>
                    </div>
                </div>
            </Link>
            <Link to={'/categoria/remeras'}>
                <div className="categorie">
                    <img src="https://firebasestorage.googleapis.com/v0/b/valkiria-react.appspot.com/o/REMERA-PORTADA.webp?alt=media&token=919645bc-47ad-49e4-a227-47035ab73c58" alt="Remeras" />
                    <div className="title-categorie">
                        <h4>Remeras</h4>
                        <p>Ver todo</p>
                    </div>
                </div>
            </Link>
            <Link to={'/categoria/vestidos'}>
                <div className="categorie">
                    <img src="https://firebasestorage.googleapis.com/v0/b/valkiria-react.appspot.com/o/VESTIDO-PORTADA.webp?alt=media&token=064bec6a-8603-4c4f-9ee1-34cbec0d200a" alt="Vestidos" />
                    <div className="title-categorie">
                        <h4>Vestidos</h4>
                        <p>Ver todo</p>
                    </div>
                </div>
            </Link>
            <Link to={'categoria/accesorios'}>
                <div className="categorie">
                    <img src="https://firebasestorage.googleapis.com/v0/b/valkiria-react.appspot.com/o/ACCESORIOS-PORTADA.webp?alt=media&token=519ec531-c05c-4a9d-8468-bc3b3faa1c68" alt="Accesorios" />
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
