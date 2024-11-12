import Three from '../Images/3.jpg';
import Four from '../Images/4.jpg';


function About() {
  return (

    <div>
      <div class="row   text-center py-5   ">
        <div class="container  text-center ">
          <h1 class="col-12 fw-bold  ">Game SHOP</h1>
          <p class="col-12 ">There are many variations of passages of Lorem Ipsum available</p>
          <div>
            <img class="col-12 col-lg-4  " src={Three} alt="" />

          </div>
          <button class="btn btn-dark   my-5  rounded-0 ">Buy Now </button>
        </div>
      </div>

      <div class="row ">
        <div class="col-12 col-md-6 col-lg-6 text-center">
          <img class=" w-75 " src={Four} alt=""/>
        </div>
        <div class="col-12   col-md-6  col-lg-6 my-auto ">
          <h1>About Our Game Shop</h1>
          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
          <button class="btn btn-dark     rounded-0 mx-auto ">Read More</button>
        </div>
      </div>
    </div>
  );
}

export default About;
