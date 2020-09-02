import React from 'react';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'
import YouTube from 'react-youtube'

import img1 from './img/img1.jpg';
import img2 from './img/img2.jpg';
import img3 from './img/img3.jpg';
import img4 from './img/img4.jpg';
import img5 from './img/img5.jpg';
import img6 from './img/img6.jpg';
import img7 from './img/img7.jpg';
import img8 from './img/img8.jpg';
import logo from './logo.svg';
import './App.css';
import './style.css';





const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };




function App() {




     return (

        <div>
          <nav className="navbar justi" role="navigation" aria-label="main navigation">
            <div className="navbar-brand  ml-auto">
              <a className="navbar-item " href="#">
                Traveling
              </a>
              <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
              </a>
            </div>
            <div id="navbarBasicExample" className="navbar-menu mr-auto">
              <div className="navbar-start">
                <a className="navbar-item">
                  Home
                </a>
                <a className="navbar-item">
                  Best places
                </a>
                <a className="navbar-item">
                  Destenantion
                </a>
                <a className="navbar-item">
                  Travel tips
                </a>
                <a className="navbar-item">
                  Travel resourses
                </a>
                <a className="navbar-item">
                  Documentation
                </a>
              </div>
            </div>
          </nav>
          <div className="columns ">
            <img src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-1.2.1&w=1000&q=80" className="column is-two-thirds opacity-3" alt="" />
            <div className="card margein p-5 has-background-dark has-text-white is-two-fifths">
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="subtitle has-text-white is-4">Why you should go for a trip... <i className="fas fa-plane" /></p>
                    <p className="title mt-2 has-text-white is-size-1 ">Traveling is easier than you think</p>
                    <p className="subtitle mt-2 has-text-white is-4">Read more <i className="fas long-arrow-right" /> </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="containerSlide">
          <Carousel responsive={responsive}>
          <div className="each-slide">
              <div>
                  <img src={img1} alt="img1" />
              </div>
          </div>
          <div className="each-slide">
              <div>
                  <img src={img2} alt="img2" />
              </div>
          </div>
          <div className="each-slide">
              <div>
                  <img src={img3} alt="img3" />
              </div>
          </div>
          <div className="each-slide">
              <div>
                  <img src={img4} alt="img4" />
              </div>
          </div>
          <div className="each-slide">
              <div>
                  <img src={img5} alt="img5" />
              </div>
          </div>
          <div className="each-slide">
              <div>
                  <img src={img3} alt="img3" />
              </div>
          </div>
          <div className="each-slide">
              <div>
                  <img src={img3} alt="img3" />
              </div>
          </div>

          </Carousel>;
        </div>
        <div class="columns with-80">
          <div class="column is-one-third huge">es</div>
            <div class="column mt-6 is-size-1 is-right">World's hottest destination for vegans</div>
              <div class="column mt-6">
                  <p>The coronavirus outbreak is a serious threat to public health. Lockdowns and other coordinated restrictive measures are necessary to save lives. However, these measures may also severely slow down our economies and can delay the deliveries
                      of critical goods and services. The European Commission has taken measures. f the EU's internal market and its effective response to the current public health crisis. </p>
                  <a href="#" class="mt-5">Read more  <i class="fas fa-arrow-right"></i></a>
              </div>
          </div>
        <div class="columns top ">
          <div class="column is-half  is-center">
              <img class="imgss" src={img3} alt="img3" />
          </div>

          <div class=" with-8">
              <p class="title is-size-1 mb-5">
                  An amazing journey through the mountains.
              </p>
              <p class=" mt-6 is-size-4">
                  The coronavirus outbreak is a serious threat to public health. Lockdowns and other coordinated restrictive measures are necessary to save lives. However, these measures may also severely slow down our economies and can delay the deliveries of critical
                  goods and services.  public health crisis.
              </p>
          </div>
          <div class="is-one-quarter is-size-1 rotated">
            <h2>What do you think of traveling?<span class="sss">________</span> </h2>
            </div>


        </div>
        <div class="columns left ">



         <div class=" is-one-third with-81 ">
             <p class="title is-size-1 mb-5">
                 An amazing journey through the mountains.
             </p>
             <p class=" mt-6 is-size-4">
                 The coronavirus outbreak is a serious threat to public health. Lockdowns and other coordinated restrictive measures are necessary to save lives. However, these measures may also severely slow down our economies and can delay the deliveries of critical
                 goods and services. The European Commission has taken measures. f the EU's internal market and its effective response to the current public health crisis.
             </p>

         </div>
           <div class="column  is-one-third is-center ">
               <img class="img8" src={img8} alt=""/>
           </div>
           <div class="column  is-one-third is-center ">
               <img class="img8s" src={img8} alt=""/>
           </div>

         </div>
         <div class="columns top2">



        <div class=" column is-one-third huge2">
            e
        </div>
        <div class="column with-8100 is-center is-centered is-size-1 is-one-third">
            Adventure and action in travel
        </div>
        <div class="column is-one-third huge3">
            BO
        </div>


    </div>
    <div class="top3">
        <div class="columns ">
            <div class="column is-half  is-center">
                <img class="imgsssh" src={img6} alt=""/>
            </div>


            <div class="card-content  with-8qq ">
                <p class="title is-size-1 mb-5">
                    An amazing journey through the mountains.
                </p>
                <p class=" mt-6 is-size-4">
                    The coronavirus outbreak is a serious threat to public health. Lockdowns and other coordinated restrictive measures are necessary to save lives. However, these measures may also severely slow down our economies and can delay the deliveries of critical
                    goods and services. The European Commission has taken measures. f the EU's internal market and its effective response to the current public health crisis.
                </p>

            </div>

        </div>
        <div class="columns top4 ">



            <div class="card-content  with-8qq ">
                <p class="title is-size-1 mb-5">
                    An amazing journey through the mountains.
                </p>
                <p class=" mt-6 is-size-4">
                    The coronavirus outbreak is a serious threat to public health. Lockdowns and other coordinated restrictive measures are necessary to save lives. However, these measures may also severely slow down our economies and can delay the deliveries of critical
                    goods and services. The European Commission has taken measures. f the EU's internal market and its effective response to the current public health crisis.
                </p>

            </div>
            <div class="column is-half  is-center">
                <img class="imssh" src={img4} alt=""/>
            </div>

        </div>
    </div>
    <p class="back">
        Travel
    </p>
      <YouTube videoId="OHAWwaYu2H0" opts={opts} />
      <p class=" is-half is-centered is-center weee ">
            <span class="semi">"</span> The coronavirus outbreak is a serious threat to public health. Lockdowns and other coordinated restrictive measures are necessary to save lives. However, these measures may also severely slow down our economies
            and can delay the deliveries of critical goods and services. The European Commission has taken measures. f the EU's internal market and its effective response to the current public health crisis.
        </p>
        <footer class="footer ">
        <div class="content has-text-centered has-text-white">
            <h1>Subscribe to our newsletter</h1>
            <div class="columns">
                <div class="column has-text-left-desktop">

                    <ul>
                        <li>
                            <h1>Traveling</h1>
                        </li>
                        <li>
                            <h4>0555-121212</h4>
                        </li>
                        <li>
                            <h4>achraf15elassoui@gmail.com</h4>
                        </li>

                    </ul>


                </div>
                <div class="column">
                    <h6>Get the best content every day</h6>
                    <div class="control has-icons-left has-icons-right">
                        <input class="input is-medium" type="email" placeholder="Email"/>
                        <span class="icon is-left">
                <i class="fa fa-envelope"></i>
                </span>
                    </div>
                    <a class="button  mt-4">Subscribe</a>
                </div>
                <div class="column">

                    <ul>
                        <li><a href="#">Best places</a></li>
                        <li><a href="#">Destenantion</a></li>
                        <li><a href="#">Travel tips</a></li>
                        <li><a href="#">Travel resourses</a></li>
                    </ul>
                </div>


            </div>
        </div>
    </footer>
        </div>
      );

}

export default App;
