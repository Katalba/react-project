

const CarouselHome = () => {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://firebasestorage.googleapis.com/v0/b/valkiria-react.appspot.com/o/carousel-3.webp?alt=media&token=32ddaea7-b6ba-4be6-bd87-d47ad1843333" className="d-block w-100" alt="novedades" />
                </div>
                <div className="carousel-item">
                    <img src="https://firebasestorage.googleapis.com/v0/b/valkiria-react.appspot.com/o/Basic%20jeans.webp?alt=media&token=0f7c5ccf-8a34-4497-8600-5acba112def1" className="d-block w-100" alt="novedades" />
                </div>
                <div className="carousel-item">
                    <img src="https://firebasestorage.googleapis.com/v0/b/valkiria-react.appspot.com/o/inicio-2.webp?alt=media&token=9dd2fcac-74c3-48ca-8e4c-c23f909ac0b5" className="d-block w-100" alt="novedades" />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default CarouselHome;
