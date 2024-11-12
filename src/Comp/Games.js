import Three from '../Images/1.jpg';
import Four from '../Images/3.jpg';
import Five from '../Images/7.jpg';
import Six from '../Images/8.jpg';
import Seven from '../Images/9.jpg';
import Eight from '../Images/10.jpg';

function Games() {
  return (

    <div>

      <div class="FreshFruit mx-auto text-center container-fluid d-md-none d-lg-block mt-5">
        <h1 class="text-center fw-bold pb-5">Fresh Games</h1>
        <div class=" 1strow row mb-4">
          <div class="   col-12 col-lg-4   col-md-6 mb-2  "><img class="img-fluid  " src={Three}
            alt=""/>
          </div>
          <div class="   col-12 col-lg-4   col-md-6 mb-2 "><img class="img-fluid  " src={Four}
            alt=""/></div>
          <div class="   col-12 col-lg-4   col-md-6 mb-2 "><img class="img-fluid  " src={Five}
            alt=""/></div>
        </div>
        <div class="row">
          <div class="  col-12  col-lg-4    col-md-6 mb-2"><img class="img-fluid  " src={Six}
            alt=""/></div>
          <div class="  col-12  col-lg-4  col-md-6 mb-2"><img class="img-fluid  " src={Seven}
            alt=""/></div>
          <div class="  col-12  col-lg-4  col-md-6 mb-2"><img class="img-fluid  " src={Eight}
            alt=""/></div>
        </div>
      </div>
    </div>

  );
}

export default Games;
