import { Component, React, useState } from "react";
import "./aboutus.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Link } from "react-router-dom";

function Aboutus() {


  return (
    <div>

      <div class=" gradient-form " style={{ backgroundColor: '#FFFFFF' }}>



        <main class="mt-5">
          <div class="container">

            <section className="aboutUs">
              <div class="row">
                <div class="col-md-5 gx-5 mb-4" id="logo">

                  <div class="bg-image hover-overlay ripple shadow-2-strong rounded-5" data-mdb-ripple-color="light">

                    <img src="./MicrosoftTeams-image (2).png" class="img-fluid" width="300" />

                  </div>
                </div>

                <div class="col-md-6 gx-5 mb-4">
                  <h4 class="text-center" className="AboutTitre">about us </h4>
                  <p class="text-muted justify-content-center mt-5" className="AboutContent">
                  ReedWorld is an innovative web platform designed to provide farmers with all the information 
                  they need to grow high-quality grain and achieve success in their farming operations.
                  At ReedWorld, we believe that knowledge is power.
                   By providing farmers with the information and resources they need to make informed decisions,
                    we can help them grow high-quality grain and achieve long-term success. 
                    So whether you're a seasoned farmer or just starting out,
                     join the ReedWorld community today and start growing with confidence!
                  </p>

                </div>
              </div>
            </section>


            <hr class="my-5" />


            
              <h4 class="mb-5"><strong>generale information </strong></h4>
              <h4 >here some informations about type of sail and life cycle of a tree ... </h4>

              <div class="row row-cols-1 row-cols-md-2 g-4 pt-2">
                <div class="col">
                  <div class="card">
                  <div class="card-body">
                      </div>
                    <img src="/2102.i305.023.realistic_life_cycle_apple_tree_infographics.jpg"  alt="..."/>
                      
                  </div>
                </div>
                <div class="col">
                  <div class="card">
                  <div class="card-body">
                    </div>
                    <img src="/39144.jpg" class="card-img-top" alt="..." />
                   
                  </div>
                </div>
               
                <div class="col">
                  <div class="card">
                  <div class="card-body">
                    </div>
                    <img src="/1q04_irhv_201215.jpg" class="card-img-top" alt="..." />
                  
                  </div>
                </div>
                <div class="col">
                  <div class="card">
                  <div class="card-body">
                    </div>
                    <img src="/2205.i305.026.S.m005.c13.fp realistic compost life circle.jpg" class="card-img-top" alt="..." />
                   
                  </div>
                </div>
                
              
              </div>
           
          </div>





        </main>





      </div>



    </div>
  )
}

export default Aboutus;