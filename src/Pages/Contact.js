import React from 'react'

var Contact = () => {
  return (
    <>
   
    <br/><br/><br/>
    
    <center>
<div class="card1">
  <span class="title">Contact Us</span>
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
</div></center></>






  );
}
export default Contact;
