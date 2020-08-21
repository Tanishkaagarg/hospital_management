import React from 'react';
import web from "../src/images/home1.jpg";
import Common from "./Common";
import Sdata from './Sdata';
import Card from './Card';
import { NavLink} from "react-router-dom";
import web1 from "../src/images/about-me.jpg";

const Home = () => {
    return ( 
    <>
        <Common name="Your Health Every Moment with " 
        imgsrc={web}  
        visit="/Services"
        det ="We are a team of well educated and experienced doctors in all domains."
        btname="Get Started" />


        
   
    <div className="my-5">
        <h1 className="text-center"> Procedure Category </h1>
    </div>
    <div className =" container-fluid mb-5">
        <div className ="row">
            <div className="col-10 mx-auto">
                <div className="row gy-4">
                    {Sdata.map((val, ind) => {
                     return <Card Key={ind} imgsrc={val.imgsrc} title={val.title} desc={val.desc}/>
                    })}
                </div> 
            </div>
        </div>
    </div>


 <section id="header" className="d-flex align-items-center ">
        <div className =" container-fluid nav_bg">
	        <div className ='row'>
		        <div className="col-10 mx-auto">
                    <div className="row">
                        <div className ="col-lg-6 order-1 order-lg-2 header-img">
                            <img src={web1} className ="img-fluid"/> 
                        </div>
                        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                            <h1> About - 
                            <strong className="brand-name">We Care</strong>
                            </h1>
                            <h2 className="my-3">We are the team of experienced Doctors for any illness.</h2>
                            <div className="mt-3">
                                <NavLink to="./About" className="btn-get-started"> Know More </NavLink>
                            </div>
                        </div> 
		            </div>
	            </div>
            </div>
        </div>
    </section>


    <div className="my-5 ">
           <h1 className="text-center"> Services we Offer </h1>
    </div>
    <div className =" container-fluid mb-5 ">
	        <div className ="row">
		        <div className="col-10 mx-auto">
                    <div className="row gy-4">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title font-weight-bold">24/7 Service</h5>
                                        <p className="card-text">We are the team of best and best doctors.</p>
                                        <NavLink to="./About" className="btn-get-started"> Know More </NavLink>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title font-weight-bold">Expert Consulation</h5>
                                        <p className="card-text">We are the team of best and best doctors.</p>
                                        <NavLink to="./About" className="btn-get-started"> Know More </NavLink>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title font-weight-bold">Intensive Care</h5>
                                        <p className="card-text">We are the team of best and best doctors.</p>
                                        <NavLink to="./About" className="btn-get-started"> Know More </NavLink>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title font-weight-bold">Family Treatment</h5>
                                        <p className="card-text">We are the team of best and best doctors.</p>
                                        <NavLink to="./About" className="btn-get-started"> Know More </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
		        </div>
	        </div>
        </div>


<section id="footer" className="d-flex align-items-center">
    <div className =" container-fluid mb-5">
        <div className ="row">
            <div className="col-10 mx-auto ">
                <div className="row gy-4">
                    <footer class="page-footer font-small blue pt-4">
                        <div class="container-fluid text-center text-md-left">
                            <div class="row">
                                <div class="col-md-5 mt-md-0 mt-3">
                                    <h5 class="text-uppercase">About WE CARE</h5>
                                    <p>We are a bunch of talented and experienced doctors with all the latest technology in our hospital. We offer all services. Do visit us.</p>
                                </div>
                                <hr class="clearfix w-100 d-md-none pb-3" />
                                <div class="col-md-4 mb-md-0 mb-4">
                                    <h5 class="text-uppercase"> Quick Links</h5>
                                    <ul class="list-unstyled">
                                        <li>
                                        <div className= "mytext ">
                                        Contact - 9876543210
                                        </div>
                                        </li>
                                        <li>
                                        <div className= "mytext">
                                        Email - example@gmail.com
                                        </div>
                                        </li>
                                        <li>
                                        <div className= "mytext">
                                        Address - xyzabbc
                                        </div>
                                        </li>
                                        
                                    </ul>
                                </div>
                            <div class="col-md-3 mb-md-0 mb-3">
                                <h5 class="text-uppercase">Useful Links</h5>
                                <ul class="list-unstyled mytext">
                                    <li>
                                    <NavLink to="./" > Home </NavLink>
                                    </li>
                                    <li>
                                    <NavLink to="./Contact " > Contact </NavLink>
                                    </li>
                                    <li>
                                    <NavLink to="./About" > About </NavLink>
                                    </li>
                                    <li>
                                    <NavLink to="./Services" > Services </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="footer-copyright text-center py-3 "><p>© 2020 Copyright : Tanishka Garg</p>
                    </div>
                </footer>
            </div> 
        </div>
    </div>
</div>
</section>
  
 </>
    );
  
};

export default Home;
