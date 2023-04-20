import React from "react";
var Home = () =>{
    return(
       
      <>
      <br/><br/>


                                   {/* Home Section */}


        <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
    <img src="./images/slide1.jpg" alt=".." width={"100%"} height={"750px"}/>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
    <img src="./images/slide2.jpg" alt=".." width={"100%"} height={"750px"}/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
    <img src="./images/slide3" alt=".." width={"100%"} height={"750px"}/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

                             {/* Latest properties */}

<section>
<div>
   <center><h1 class="Sale" id="Sale">Latest Properties for Sale</h1></center>
   <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <img src="./images/home1.jpg
" class="card-img-top" alt="..."  width={"70"} height={"300"} />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="./images/home2.jpg
" class="card-img-top" alt="..."  width={"70"} height={"300"}/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
      
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="./images/home3.jpg" class="card-img-top" alt="..."  width={"70"} height={"300"}/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </div>
      
    </div>
  </div>
</div></div></section>


                                     {/* Latest Rental Properties */}

<section>
<center><div class="about" ><h1>Latest Rental Properties</h1></div></center><br/>
<div class="aboutus" id="about">


<div class="row featurette">
<div class="col-md-2"></div>
      <div class="col-md-4">
        <center><h2 class="featurette-heading"><br/>CHASE AVENUE </h2></center>
        <center><h4 class="featurette-heading">4 Bedroom House </h4></center>
        <p class="lead">In 2016, Our Founder – Sravan, during an international trip visited a Burger restaurant which had multiple burger options & bold flavours like PB&J, classic cheese burger which were native to the country. </p>
      </div>
      <div class="col-md-4">
       <img src="./images/home4.jpg" class="img-fluid rounded-circle" />

      </div>
      <div class="col-md-2"></div>
    </div><br />

    <div class="row featurette">
    <div class="col-md-2"></div>
      <div class="col-md-4">
        <img src="./images/home5.jpeg" class="img-fluid rounded-circle" />

      </div><div class="col-md-4">
       <center> <h2 class="featurette-heading">KINGS CLOSE</h2></center>
       <center><h4 class="featurette-heading">5 Bedroom House </h4></center>
        <p class="lead">FOODIE is one of the fastest growing modern casual dining chain of cafes by sravan that exists to delight .</p>
      </div>
    </div><br />
    <div class="col-md-2"></div>

</div><br />
    </section>

                                  {/* Trust */}

    <section>

    <center><h1>REALSTORS YOU CAN TRUST</h1></center>
    
<div class="container mt-5 mb-5">
    
    <div class="row g-2">
        <div class="col-md-4">
            <div class="p-3 text-center px-4">
                
                <div class="user-image">
                    
            <img src="./images/home6.png"  width="80" />
                    
                </div>
                
                <div class="user-content">
                    
                    <h5 class="mb-0">FREE REGISTRATION<br /> NO HIDDEN FEES</h5>
                    
                    <p>Lorem ipsum dolor sit amet.</p>
                    
                </div>

                
            </div>
        </div>
        
        <div class="col-md-4">
            
            <div class="p-3 text-center px-4">
                
                <div class="user-image">
                    
            <img src="./images/home7.png"  width="80"
                   />
                    
                </div>
                
                <div class="user-content">
                    
                    <h5 class="mb-0">PROPERTY APPRAISAL<br />FREE OF CHARGE</h5>
                  
                    <p>Lorem ipsum dolor sit amet. </p>
                    
                </div>
                
               
                
            </div>
            
        </div>
        
        <div class="col-md-4">
            
            <div class="p-3 text-center px-4">
                
                <div class="user-image">
                    
            <img src="./images/home8.png"  width="80" />
                    
                </div>
                
                <div class="user-content">
                    
                    <h5 class="mb-0">LARGE COVERAGE<br />OFFICES IN 4 LOCATIONS</h5>
                    
                    <p>Lorem ipsum dolor sit amet.</p>
                    
                </div>
                
         
            </div>
            
        </div>
        
        
    </div>
    
</div>
</section>


                             {/* Review */}

 <div class="col-md-12 d-flex justify-content-center" className="Review" id="Review">
              <center><h1>WHAT OUR CLIENTS THINK</h1></center>

            </div>
<div class="container mt-5 mb-5">
    
    <div class="row g-2">
        <div class="col-md-4">
            <div class="card p-3 text-center px-4">
                
                <div class="user-image">
                    
            <img src="./images/home9.jpg" class="rounded-circle" width="80"
                    />
                    
                </div>
                
                <div class="user-content">
                    
                    <h5 class="mb-0">Bruce Hardy</h5>
                    
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    
                </div>
                
                <div class="ratings">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    
                </div>
                
            </div>
        </div>
        
        <div class="col-md-4">
            
            <div class="card p-3 text-center px-4">
                
                <div class="user-image">
                    
            <img src="./images/home10.jpg" class="rounded-circle" width="80"
                    />
                    
                </div>
                
                <div class="user-content">
                    
                    <h5 class="mb-0">Mark Smith</h5>
                  
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    
                </div>
                
                <div class="ratings">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    
                </div>
                
            </div>
            
        </div>
        
        <div class="col-md-4">
            
            <div class="card p-3 text-center px-4">
                
                <div class="user-image">
                    
            <img src="./images/home11.jpg" class="rounded-circle" width="80"
                    />
                    
                </div>
                
                <div class="user-content">
                    
                    <h5 class="mb-0">Veera  Duncan</h5>
                    
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    
                </div>
                
                <div class="ratings">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    
                </div>
                
            </div>
            
        </div>
        
        
    </div>
    
</div>






<section>
<center>
<div class="card1">
  <span class="title">Leave a Comment</span>
  <form class="form">
    <div class="group">
    <input placeholder=" " type="text" required="" />
    <label for="name">Name</label>
    </div>
<div class="group">
    <input placeholder=" " type="email" id="email" name="email" required="" />
    <label for="email">Email</label>
    </div>
    <div class="group">
      <select>
    <option selected value="na">
                          Choose One:
                      </option>
      
                      <option value="service">
                          House for Buying
                      </option>
      
                      <option value="suggestions">
                          House for Rent
                      </option>
      
                      <option value="product">
                          suggestions
                      </option></select></div><br/>
<div class="group">
    <textarea placeholder=" " id="comment" name="comment" rows="5" required=""></textarea>
    <label for="comment">message</label>
</div>
    <button type="submit">Submit</button>
  </form>
</div></center>
</section>

    
    
    
    
    
     </>

    );
}
export default Home;



