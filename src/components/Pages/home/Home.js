import React from 'react'

import Navbar from '../../Navbar/Navbar'
import './home.css'

import Footer from '../../footer/Footer'
import Services from '../../services/Services'
import Cards from '../../card/Cards'
function Home() {

  // const {user} = useContext(Context)

  return (
    <>
      <Navbar/>
     <div className='home'>

       <div className='upper'>
       <img src='photos/d1.jpeg'></img>
      </div>


      <div className='main-1'>
        <Cards/>
      </div>


<div class="parallax"></div>


      {/* <!-- Testimonials --> */}

<div id="testimonials">
 
  <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">

      <div class="carousel-item active container-fluid">
        <h2 class="testimonial-text">I no longer have to sniff other dogs for love. I've found the hottest Corgi on Dogtopia.</h2>
        <img class="text-image" src="photos/dog-img.jpg" alt="dog-profile"/>
        <em>Pebbles, New York</em>
      </div>


      <div class="carousel-item container-fluid">
        <h2 class="testimonial-text">My dog used to be so lonely, but with Dogtopia's help, they've found the love of their life. I think.</h2>
  <img class="text-image" src="photos/lady-img.jpg" alt="lady-profile1"/>
  <em>Beverly, India</em>
      </div>

      <div class="carousel-item container-fluid">
        <h2 class="testimonial-text">My dog was filling unhappy ,but due to doctor service of Dogtopia he is fit and fine.</h2>
  <img class="text-image" src="photos/main-2.webp" alt="lady-profile2"/>
  <em>Nathen, Austria</em>
      </div>
      
      <div class="carousel-item container-fluid">
        <h2 class="testimonial-text">After the grooming service in DogTopia my dogs whole look changed and he was looking outstanding.</h2>
  <img class="text-image" src="photos/main-4.jpeg" alt="lady-profile4"/>
  <em>Angela ,London</em>
      </div>
      
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>

</div>


<div className='main-3'>
    <h1>Services we offer</h1>
    <div className='container'>
      <div className='row'>
      <Services postImage="photos/daycare.jpeg" title="Day Care" desc="A happy, healthy, and safe dog is our top priority at Dogtopia. You can be confident knowing your dog will be well-cared for while they run, jump."/>

      <Services postImage="photos/t.jpeg" title="Dog Training" desc="DogTopia® dog training services are specially designed to enrich your pup. Our premier dog training services offer flexible programs for every dog."/>

      <Services postImage="photos/g.jpeg" title="Dog Grooming" desc="With dog grooming areas specially designed for your pup’s comfort, DogTopia can take this off your to-do list. By adding a bath to your pup’s stay. "/>

      <Services postImage="photos/w.jpeg" title="Dog Walking" desc="Everyone feels better after a nice long walk—including dog.Fresh air,exercise, and just getting out of the house is always refreshing.That’s where DogTopia comes into the picture. Our Certified Caregivers will come to your home, greet your pup ."/>

      <Services postImage="photos/v.jpeg" title="Dog Veterinary" desc="A nutritionally balanced diet is crucial for the healthy growth and development of your puppy or dog in order to prepare him/her for an active, long, and healthy life.development of your puppy or dog in order to prepare him/her for an active, long, and healthy life"/>

      <Services postImage="photos/f.jpeg" title="Dog Food" desc="There are many things to consider when choosing a company that will take care of your dog and all their needs. Trust is a critical factor that should be at the top of every pet parent’s mind. At DogTopia®, you can rest assured that when your dog"/>
      </div>
    </div>

</div>

    </div>
        <Footer/>
    </>
  )
}

export default Home