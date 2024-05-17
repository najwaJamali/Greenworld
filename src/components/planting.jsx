import { Component, React, useState, useEffect } from "react";
import "./planting.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import axios from "axios";

import { Link } from "react-router-dom";

function Planting() {
  const [listeInfo, setlisteInfo] = useState([])
  const [infos, setinfos] = useState(listeInfo)
  const [listChoix, setlistChoix] = useState("")
  const [inputValue, setinputValue] = useState("")


   useEffect(() => {

     axios.get("http://localhost:3004/infomations").then((res) => {
      setinfos(res.data)
     console.log(res.data);
    
  });
    
     }, []);
  const changerChoix = (e) => {
    setlistChoix(e.target.value);
};
const inputValues = (e) => {
   setinputValue(e.target.value);
};


const check =()=>{
  
  if (listChoix=="vegetables"){
    console.log(listChoix)
    console.log(inputValue)
    setinfos(infos.filter(item=>item.name==inputValue))
  }else if(listChoix=="fruits"){
    console.log(listChoix)
    console.log(inputValue)
    setinfos(infos.filter(item=>item.name==inputValue))
  }else{
    alert("the element is not defiend")
  }

}







const handleSubmitButton = () => { 
  alert(listChoix)}



  return (
    <div class=" pt-3 pb-3">
      <div className="titre">
      </div>
      <div class="d-flex   " id="search">
        <div class="input-group   ">
          <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" onChange={inputValues}/>
          <button type="button" class="btn btn-outline-primary " onClick={check}>search</button>
        </div>
        <div class="input-group">
          <select class="form-select" aria-label="Default select example" onChange={changerChoix}>
            <option selected > filter by planting type </option>
            <option value="fruits" >fruits</option>
            <option value="vegetables" >vegetables</option>
           
          </select>
        </div>
      </div>
      <div class="d-flex flex-wrap" >
        {infos.map((infos) => {
          return (
            <div class="d-flex mt-3 " className="cardItem">

              <div class="card m-3 ">
                <img src={infos.image} class="card-img-top" alt="Fissure in Sandstone"  />
                <div class="card-body">
                  <h5 class="card-title"><strong>{infos.name}</strong></h5>

                  
                  <p class="card-text">description: {infos.description}</p>
                  <p class="card-text">Type :{infos.type}</p>
                  

                  <Link to={`/Details/${infos.id}`} class="btn btn-primary">Details</Link>
                   
                </div>
              </div>


            </div>
          )
        })}
      </div>
      
    </div>


  )
}

export default Planting;