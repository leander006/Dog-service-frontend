import React from 'react'
import Cards from '../../card/Cards'
import Navbar from '../../Navbar/Navbar'
import './whyus.css'
import Footer from '../../footer/Footer'
function WhyUs() {
  return (
    <>
          <Navbar/>
          <div className='why-us'>
            <div className='why-us-upper-1'>
                <h3>Why Choose</h3>
                <h1>OUR DOG CARE SERVICES?</h1>
                <div className='why-us-2'>

                <h4>Delivering the DogTopia Difference</h4>
                <p>There are many things to consider when choosing a company that will take care of your dog and all their needs. Trust is a criticalfactor that should be at the top of every pet parent’s mind. At DogTopia®, you can rest assured that when your dog is with us,they are in safe and loving hands. Providing peace of mind for those times you can’t be with your pup is our number-one priority.</p>
                </div>
                <div className='why-us-3'>
                <h4>What Sets Us Apart from the Rest</h4>

                <p>Your dog deserves the best – they deserve the premier, all-inclusive services of DogTopia. Here, your pup can romp and play all day long, socializing with other dogs and humans. It’s no wonder pups pull their parents to our front door every time they come to Camp!</p>

                </div>
                <div className='why-us-list'>
                <h4>Some of the many benefits your dog can experience at Camp include:</h4>
                <li>Regular exercise to maintain a healthy weight</li>
                <li>Relief from boredom, separation anxiety, and destructive behaviors</li>
                <li>Improved socialization with people and other dogs</li>
                <li>Increase in overall happiness</li>
                </div>
            
            </div>

            <div className='why-us-mid'>
                <Cards/>
            </div>
          <div className='why-us-lower'>
                <h1>All-Inclusive Pricing</h1>

                <p>Simply put, the price you see is the price you pay. We don’t add on unnecessary fees or try to nickel and dime you</p>

                <div className='why-us-lower-list'>
                  <div className='why-us-list-1'>
                    <li>All Day Play</li>
                    <li>Spacious Play Yards</li>
                    <li>Check In/Out Anytime During Camp Hours</li>
                    <li>Lots of TLC!</li>
                  </div>
                  <div className='why-us-list-2'>
                  <li>Medicine Administration</li>
                  <li>Live Web Cams</li>
                  <li>Pet First Aid & CPR Certified Counselors</li>
                  </div>
                </div>
          </div>
          </div>
          <Footer/>
    </>
  )
}

export default WhyUs