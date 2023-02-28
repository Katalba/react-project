
import { Link } from "react-router-dom";
const CarouselHome = () => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" />
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" />
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" />
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://firebasestorage.googleapis.com/v0/b/valkiria-react.appspot.com/o/carousel-3.webp?alt=media&token=32ddaea7-b6ba-4be6-bd87-d47ad1843333" className="d-block w-100" alt="novedades" />
                    <div className="carousel-caption d-none d-md-block">
                        <Link style={{ textDecoration: 'none' }} to='/categoria/amore'>
                            <button className="button-header bu-he-dos" >
                                <p className="button-compra bu-co-dos">Comprar ahora</p>
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://firebasestorage.googleapis.com/v0/b/valkiria-react.appspot.com/o/Basic%20jeans.webp?alt=media&token=0f7c5ccf-8a34-4497-8600-5acba112def1" className="d-block w-100" alt="novedades" />
                </div>
                <div className="carousel-item">
                    <img src="https://firebasestorage.googleapis.com/v0/b/valkiria-react.appspot.com/o/inicio-2.webp?alt=media&token=9dd2fcac-74c3-48ca-8e4c-c23f909ac0b5" className="d-block w-100" alt="novedades" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default CarouselHome;
