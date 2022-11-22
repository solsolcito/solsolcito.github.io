function Carousel(props) {
    return (
        <>
            

            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">

                    {
                        props.images.map((img, i) => {
                            const classes = i == 0 ? "carousel-item active" : "carousel-item"
                            return (
                                <div className={classes}>
                                    <img src={img} className="img-fluid" alt />
                                </div>
                            )
                        })
                    }
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}
export default Carousel 