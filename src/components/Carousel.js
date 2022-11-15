function Carousel() {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="foto.jpg" className="img-fluid" alt/>
                </div>
                <div className="carousel-item">
                    <img src="foto1.jpg" className="img-fluid" alt/>
                </div>>
                <div className="carousel-item">
                    <img src="foto2.jpg" className="img-fluid" alt/>
                </div>
                <div className="carousel-item">
                    <img src="foto3.jpg" className="img-fluid" alt/>
                </div>
                <div className="carousel-item">
                    <img src="foto4.jpg" className="img-fluid" alt/>
                </div>
                <div className="carousel-item">
                    <img src="foto5.jpg" className="img-fluid" alt/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>)
}
export default Carousel 