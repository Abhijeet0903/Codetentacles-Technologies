
import client from '../Images/client-img.png';
import location from '../Images/location (1).png';
import call from '../Images/call (1).png';
import mail from '../Images/mail.png';
import facebook from '../Images/facebook-logo-button.png';
import insta from '../Images/instagram.png';
import linkedin from '../Images/linkedin.png';
import twitter from '../Images/twitter-logo-button.png';

function Help() {
  return (

    <div className='container py-lg-5'>

      <h1 className="fw-bold text-center">What Says Cutomer
      </h1>
      <div id="carouselslide" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container text-center  w-75">
              <div>
                <img src={client} alt="" />
              </div>
              <h2>Jone Mark</h2>
              <p>website template image Lorem ipsum dolor sit amet,website template image
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad
                minim
                veniam, quis nostrud exercitation ullamco laboris ut aliquip ex ea commodoconsequat. Duis aute irure
                dolor in
                reprehenderit in voluptate velit esse</p>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container text-center  w-75">
              <div>
                <img src={client} alt="" />
              </div>
              <h2>Jone Mark</h2>
              <p>website template image Lorem ipsum dolor sit amet,website template image
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad
                minim
                veniam, quis nostrud exercitation ullamco laboris ut aliquip ex ea commodoconsequat. Duis aute irure
                dolor in
                reprehenderit in voluptate velit esse</p>
            </div>
          </div>
        </div>
        <button className=" d-none d-lg-block d-md-block   carousel-control-prev  bg-dark rounded-circle " type="button"
          data-bs-target="#carouselslide" data-bs-slide="prev"><i className="fa-solid fa-arrow-left"></i></button>
        <button className=" d-none d-lg-block d-md-block   carousel-control-next bg-dark rounded-circle" type="button"
          data-bs-target="#carouselslide" data-bs-slide="next"><i className="fa-solid fa-arrow-right"></i></button>
      </div>




      <div class="Callback mb-4 my-lg-5 ">
        <div class=" row container text-center mx-auto  ">
          <h2 class="fw-bold pb-5">Enquiry</h2>
          <div class="col-12 col-md-6">
            <form>
              <input class=" p-4 m-2 w-100" type="text" placeholder="FULL NAME" />
              <input class=" p-4 m-2 w-100" type="text" placeholder="EMAIL" />
              <input class=" p-4 m-2 w-100" type="text" placeholder="PHONE NUMBER" />
              <input class=" p-4 m-2 w-100" type="text" placeholder="MESSAGE" />
            </form>
            <button class="btn btn-warning  rounded-0   text-dark w-25 mb-5 "> SEND</button>
          </div>
          <div class="col-12 col-md-6">
            <iframe class="w-100"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6150925.775654636!2d7.426759489170923!3d41.16984063216395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d4fe82448dd203%3A0xe22cf55c24635e6f!2sItaly!5e0!3m2!1sen!2sin!4v1703443394068!5m2!1sen!2sin"
              width="600" height="450" allowfullscreen="" loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
      <div class="bg-dark   py-5  w-100 mx-auto text-center  ">
        <div class=" container  text-white ">
          <div class="container text-center mb-5">
            <h1 class="display-5 fw-bold">GAME ZONE</h1>
            <div class=" row d-flex ">
              <a class="text-reset col-12 col-md-4  " href="">
                <p> <img class="me-2" src={location} alt="" />Passages of Lorem Ipsum
                  available</p>
              </a>
              <a class="text-reset col-12 col-md-4 " href="">
                <p><img class="me-2" src={call} alt="" /> Call : +012334567890</p>
              </a>
              <a class="text-reset col-12 col-md-4 " href="">
                <p c><img class="me-2" src={mail} alt="" /> mail@domain.com</p>
              </a>
            </div>
            <div class="row  ">
              <div class="  container col-12  col-md-8 d-flex mt-5 ">
                <input class=" w-100 rounded-0 " type="text" placeholder="Enter Your Email" />
                <button class="btn bg-warning text-dark w-50 rounded-0">Subscribe</button>
              </div>
              <div class="col-12 col-md-4 d-flex  mx-auto text-center mt-5   ">
                <div class="me-2"> <a href=""> <img src={facebook} alt="" /> </a>
                </div>
                <div class="me-2"> <a href=""> <img src={insta} alt="" /> </a></div>
                <div class="me-2"> <a href=""> <img src={linkedin} alt="" /> </a> </div>
                <div class=" me-2 "> <a href=""> <img src={twitter} alt="" /> </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
  <footer class="text-center mt-5">© 2024 All Rights Reserved.  </footer>

    </div>

    
  );
}

export default Help;
