import { Component, React } from "react";
import "./home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import { Link } from "react-router-dom";

class Home extends Component {
  // Set state
  // Make Handleclick Function

  render() {
    return (
      <div>
        <div id="carouselExampleIndicators" class="carousel slide  " data-bs-ride="carousel" className="carousel">

          <div class="carousel-inner pt-2">
            <div class="carousel-item active">
              <img src="./image.png" class="d-block w-100 h-70 " alt="..." />
            </div>


          </div>
          <div class="pt-2  text-center " >
            <h2 class="pt-2 ">Morocco and its relationship to agricultural production</h2>
            <p class="border " className="MaroccoInfo">Morocco is a country in North Africa that has a strong history of agriculture.
               The agricultural sector in Morocco is an important pillar of the country's economy,
                accounting for a significant portion of its gross domestic product (GDP) and employing a large percentage of its population.
                 Morocco's climate and geography allow for the cultivation of a variety of crops, including wheat, barley,
                  citrus fruits, olives, and vegetables. In recent years, the government has made significant investments in the agricultural sector, 
                  including the development of modern irrigation systems and the promotion of organic farming practices. Additionally, 
                  Morocco has established partnerships with other countries and international organizations to strengthen its agricultural sector and increase its agricultural exports. 
                  Despite these efforts, however, the agricultural sector in Morocco still faces challenges such as water scarcity and the effects of climate change.</p>
          </div>

        </div>
        
        <main class="mt-5">
      <div class="container">
        
        <section className="aboutUs">
          <div class="row  ">
            <div class="col-md-5 gx-5 mb-4" id="logo">
                
              <div class="bg-image hover-overlay ripple shadow-2-strong rounded-5" data-mdb-ripple-color="light">
                
                <img src="./orange-white-white.jpg" class="img-fluid " width="300" />
                
              </div>
            </div>

            <div class="col-md-6 gx-5 mb-4">
              <h4 class="text-center" className="AboutTitre">Orange  </h4>
              <p class="text-muted justify-content-center "  className="AboutContent">
              Orange production in Morocco is estimated at a record 1.2 million tons in 2021–22, 
              up 11% from the year before and up by one-third during the past 10 years.
               Of the total oranges produced, 10% are exported.Orange exports occur between December and August.
                The orange industry has grown in direct response to domestic as well as overseas demand from Canada,
                 the EU and Russia. Exports averaged $82 million (144,000 tons) from 2017 to 2020 but dropped to $59 million (95,000 tons) in 2021.
                  However, exports are forecast to grow with rising production due to favorable weather and increased area as new orchards begin producing.
              </p>
             
            </div>
          </div>

          <hr></hr>


          <div class="row  ">
          <div class="col-md-6 gx-5 mb-4">
              <h4 class="text-center" className="AboutTitre">Tomatos   </h4>
              <p class="text-muted justify-content-center "  className="AboutContent">
              Morocco is the world’s largest tomato producer and exporter.
               The output of tomatoes for export in Morocco in 2015\2016 was one hundred thirty million tonnes.
                They are three types of tomato production firms in Morocco: industrial, premier and seasonal tomatoes.
                 Premier tomatoes are grown for export with most of the products destined for markets in Canada, 
                 the European Union and Russia among others. The export of Morocco tomatoes has increased by 50% over the past 10years.
              </p>
             
            </div>
            <div class="col-md-5 gx-5 mb-4" id="logo">
                
              <div class="bg-image hover-overlay ripple shadow-2-strong rounded-5" data-mdb-ripple-color="light">
                
                <img src="./tomatoes.jpg" class="img-fluid " width="300" />
                
              </div>
            </div>
            <hr></hr>

            
          </div>

          <div class="row  ">
            <div class="col-md-5 gx-5 mb-4" id="logo">
                
              <div class="bg-image hover-overlay ripple shadow-2-strong rounded-5" data-mdb-ripple-color="light">
                
                <img src="./22993.jpg" class="img-fluid " width="200" />
                
              </div>
            </div>

            <div class="col-md-6 gx-5 mb-4 mt ">
              <h4 class="text-center" className="AboutTitre">Berley   </h4>
              <p class="text-muted justify-content-center "  className="AboutContent">
              In 2021, Morocco exported $11.1k in Barley, making it the 79th largest exporter of Barley in the world. 
              At the same year, Barley was the 919th most exported product in Morocco. 
              The main destination of Barley exports from Morocco are: Germany ($10.9k), Romania ($68), India ($59), and Ethiopia ($11).
The fastest growing export markets for Barley of Morocco between 2020 and 2021 were Germany ($10.9k), Romania ($68), and India ($59).

              </p>
             
            </div>
          </div>
          <hr></hr>

          <div class="row  justify-content-center">
          <div class="col-md-6 gx-5  ">
              <h4 class="text-center" className="AboutTitre">Grapes   </h4>
              <p class="text-muted  mp-1"  className="AboutContent">
              Moroccan table grapes are a key fruit for export, and it is used as a reference for its high quality, and its excellent sweetness. 
              From mid-May to mid-July, Morocco is offering superior quality grapes, grown in certified farms that use the top-of-the-range protected varieties.
Morocco offers a large specter of varieties to choose from, going from Early Sweet, Sugra One and Crimson to other tasty newly introduced varieties, 
such as the new red seedless variety Passion Fire (Arra 29), Sugar Drop (Arra30) and the black seedless variety Prima.
The main production regions for table grapes (Vitis vinifera) are Doukkala, Haouz, Taroudant, Benslimane, Rabat-Salé, Khémisset and Essaouira which total 71% of the total area.
Every day, the Moroccan table Grapes are reaching new markets in the five continents, and gain more and more appreciation from professionals and final customers

              </p>
             
            </div>
            <div class="col-md-5 gx-5 mb-4" id="logo">
                
              <div class="bg-image hover-overlay ripple shadow-2-strong rounded-5" data-mdb-ripple-color="light">
                
                <img src="./fresh-green-grapes-with-leaves-isolated-white.jpg" class="img-fluid "width="300" />
                
              </div>
            </div>

            
          </div>
        </section>
        </div>
        </main>





      </div>


    )

  }
}




export default Home;