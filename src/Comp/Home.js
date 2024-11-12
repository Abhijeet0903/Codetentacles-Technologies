import one from '../Images/11.jpg';
import two from '../Images/12.jpg';
import '../Comp/Comp.css';

function Home() {
  return (
    <div>
      <div className=" d-none d-md-block d-lg-block navconatainer1  mx-auto text-center   w-100 ">
        <nav className="bg-dark text-white p-3   ">
          <ul className="nav flex-row text-center ms-auto justify-content-center">
            <li className="nav-item"><a href="" className="text-reset nav-link">Home</a></li>
            <li className="nav-item"><a href="" className="text-reset nav-link">About</a></li>
            <li className="nav-item"><a href="" className="text-reset nav-link">Our Games</a></li>
            <li className="nav-item"><a href="" className="text-reset nav-link">Testimonials</a></li>
            <li className="nav-item"><a href="" className="text-reset nav-link">Contact Us</a></li>
            <li className="nav-item"><a href="" className="text-reset nav-link"><i className="fa-solid fa-magnifying-glass"></i></a>
            </li>
          </ul>
        </nav>
      </div>

      <div id="carouselslide" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className=''>
              <div className="carousel-caption ">
                <h2 className="fw-bold">Game Zone</h2>
              </div>
              <div className='text-center'>
                <img className="w-50" src={one} alt="" />
              </div>
            </div>
          </div>
          <div className="carousel-item positon-relative">
            <div>
              <div className="carousel-caption ">
                <h2 className="fw-bold">Game Zone</h2>
              </div>
              <div className='text-center'>
              <img className="w-50" src={two} alt="" />
              </div>
            </div>
          </div>
        </div>
        <button className=" d-none d-lg-block d-md-block carousel-control-prev   bg-dark rounded-circle " type="button"
          data-bs-target="#carouselslide" data-bs-slide="prev"><i className="fa-solid fa-arrow-left"></i></button>
        <button className="  d-none d-lg-block d-md-block  carousel-control-next  bg-dark rounded-circle" type="button"
          data-bs-target="#carouselslide" data-bs-slide="next"><i className="fa-solid fa-arrow-right"></i></button>
      </div>
    </div>
  );
}

export default Home;
