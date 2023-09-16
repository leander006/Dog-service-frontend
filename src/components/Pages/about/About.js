import React from 'react'
import Navbar from '../../Navbar/Navbar'
import './about.css'
import Footer from '../../footer/Footer'
import Cards from '../../card/Cards'
function About() {
  return (
    <>
    <Navbar/>
      <div className='about'>
        <div className='about-upper'>

        </div>
        <div className='about-mid'>
          <div className='about-mid-1'>

         
        <h1>ABOUT OUR DOG CARE SERVICES</h1>

    <h3>Leading the Way in Doggy Day Care, Boarding, & More</h3>

   <p>It’s important to get to know your pup care provider, as you are trusting us with a furry member of your family. With DogTopia®, you can rest assured your dog is in the best, most qualified hands in the business. Since 2000, we have been providing fun and dependable dog care services parents and pups love.</p>
   </div>
  <div className='about-services'>
        <h4>Two of our most common services are:</h4>
          <p><strong>Doggy day care</strong> – You’re busy but don’t want your pup to feel alone. We totally understand! That’s why we offer doggy day care, where your pup can run around with other dogs while cared for by our Certified Camp Counselors®. We have spacious play areas for maximum fun.</p>

          <p><strong>Dog boarding</strong>–If you’re going away for a single night or multiple weeks, our boarding service treats dogs like  family, providing them all-day play, lots of attention from our staff, and Campfire Treats™ at night.
        </p>

  </div>
        </div>
    <div className='about-mid-2'>
      <Cards/>
    </div>

    <div className='about-lower'>
        <div id='about-lower-img'>
          <img src='photos/dd1.png'></img>
        </div>
        <div className='about-lower-quotes'>
            <h3>Always Putting</h3>
            <h1>SAFETY FIRST</h1>

            <p>At DogTopia, we take every step necessary to ensure your pup is in the best hands. We treat all our Campers as if they were our own and provide individualized attention and tender loving care.</p>

            <div className='about-lower-list'>
              <h2>For your comfort and reassurance, you should know that:</h2>
              <li>Our staff is trained in dog behavior and certified in pet first aid and CPR</li>
              <li>Our facilities are monitored 24/7</li>
              <li>Our live webcams allow pet parents to check on their dogs from anywhere</li>
            </div>
        </div>
    </div>


      </div>
      <Footer/>
    </>
  )
}

export default About