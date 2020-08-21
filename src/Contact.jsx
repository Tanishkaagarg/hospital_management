import React from 'react';

const Contact = () => {
    return ( 
    <>
       <div className="my-5">
           <h1 className ="text-center" > Contact Us</h1>
       </div>
       <div className ="container contact_div">
           <div className="row">
               <div className ="col-md-6 col-10 mx-auto">
               <form>
                    <div class="form-group">
                        <label for="exampleInputName1">Full Name* </label>
                        <input type="text" class="form-control" id="exampleInputName1" /> 
                    </div>
                    <br/>
                    <div class="form-group">
                        <label for="exampleInputPhone1">Phone Number* </label>
                        <input type="text" class="form-control" id="exampleInputPhone1" />
                    </div>
                    <br/>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address* </label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <br/>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Message</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
                    </div>
                    <br/>
                    <div class="form-group form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <br/>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
               </div>
           </div>
       </div>
    </>
    );
};

export default Contact;
