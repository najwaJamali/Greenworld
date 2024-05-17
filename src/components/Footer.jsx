import { Component, React, useState, useEffect } from "react";
import "./Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import axios from "axios";


function Footer (){
    return(
        <div class=".container my-5 mb-0">
                <footer class="text-center text-lg-start text-white d-block  w-100 p-3" className="footer">
                  <div class="container p-4 pb-0">
                    <section class="">
                      <div class="row">
                        <div class="col-md-5 col-lg-3 col-xl-4 mx-auto mt-3">
                          <h6 class="text-uppercase mb-4 ">
                            Green_World
                          </h6>
                          <p>
                          ReedWorld is an innovative web platform designed to provide farmers with all the information 
                          they need to grow high-quality grain and achieve success in their farming operations.
                          </p>
                        </div>
        
                        <hr class=" clearfix d-md-none" />
        
        
        
        
        
                        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                          <h6 class="text-uppercase mb-4 font-weight-bold">Contact</h6>
                          <p><i class="fas fa-envelope mr-3"></i>Green_World@gmail.com</p>
                          <p><i class="fas fa-phone mr-3"></i> +212 6 95 63 64 29</p>
                          <p><i class="fas fa-print mr-3"></i> +212 6 30 05 28 91</p>
                        </div>
        
                        <hr class=" clearfix d-md-none" />
        
                        </div>
        
                    </section>
                  </div>
        
                  <div
                    class="text-center p-3"
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
                  >
                    © create by :
                    <a class="text-white" href="https://www.facebook.com/profile.php?id=100011752951735"
                    >najwa jamali</a>
                  </div>
                </footer>
              </div>)
}
export default Footer;

















