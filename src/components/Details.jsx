import { React, useState, useEffect } from "react";
import "./Details.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Link, useParams } from "react-router-dom";
import axios from "axios";


function Details() {
  const { id } = useParams();
  const [data, setData] = useState({

  })


  useEffect(() => {
    axios.get('http://localhost:3004/infomations/' + id).then((res) => {
      setData(res.data)
      console.log(res.data)
    }
    )

      .catch(err => console.log(err))


  }, []);

  return (
    <div>

      <div class=" gradient-form   " style={{ backgroundColor: 'white' }} >



        <div class="card-body  row   "  >



          <section class="col-6 " >
            <div class="container py-5">
              <div class="row  card mb-4 justify-content-center m-5 w-5">
                <div class="card-header py-3">
                  <h5 class="mb-0 "> details</h5>
                </div>
                <div class="card-body">
                  <form>
                    <div class="row mb-4">
                      <div class="col">
                        <div class="form-outline">

                          <label class="form-label" for="form6Example1"> name</label>
                          <p>{data.name}</p>
                        </div>
                      </div>
                      <div class="col">
                        <div class="form-outline">
                          <label class="form-label" for="form6Example2">type</label>
                          <p>{data.type}</p>

                        </div>
                      </div>
                    </div>
                    <div class="row mb-4">
                      <div class="col">
                        <div class="form-outline">

                          <label class="form-label" for="form6Example1">description</label>
                          <p>{data.description}</p>
                        </div>
                      </div>
                      <div class="col">
                        <div class="form-outline">
                          <label class="form-label" for="form6Example2">season</label>
                          <p>{data.season}</p>

                        </div>
                      </div>
                    </div>

                    <div class="row mb-4">
                      <div class="col">

                        <div class="form-outline">
                          <label class="form-label" for="form6Example2">temperatures Maximum</label>
                          <p>{data.temperaturesMaximum}</p>

                        </div>
                      </div>

                      <div class="col">
                        <div class="form-outline">
                          <label class="form-label" for="form6Example2">temperatures Minimum</label>
                          <p>{data.temperaturesMinimum}</p>

                        </div>
                      </div>
                    </div>
                    <div class="col">

                      <div class="col">
                        <div class="form-outline">

                          <label class="form-label" for="form6Example1">quantity of water</label>
                          <p>{data.quantityofwater}</p>
                        </div>
                      </div>
                    </div>
                    <div class="row mb-4">
                      <div class="col">

                        <div class="form-outline">
                          <label class="form-label" for="form6Example2">time germination</label>
                          <p>{data.timegermination}</p>

                        </div>
                      </div>

                      <div class="col">
                        <div class="form-outline">
                          <label class="form-label" for="form6Example2">time harvest</label>
                          <p>{data.timeharvest}</p>

                        </div>
                      </div>
                    </div>

                    <hr class="my-4" />

                    <div class="form-check">
                      <label class="form-check-label" id="text">
                        i wish be helpful to you &#128522;
                      </label>
                    </div>


                  </form>
                </div>
              </div>
            </div>

          </section >
          <div class=" col-6 w-4 " style={{ paddingTop: '1px' }}>
            <div className="photo1" >

              <img src={data.image} width="500px" height="500px" 
                class="img-fluid justify-content-center m-5 w-5" alt="Sample image" /></div>




          </div>
        </div >




      </div >



    </div >
  )
}

export default Details;