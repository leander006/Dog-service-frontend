import React from 'react'


import './services.css'

function Services(services) {

  return (
          <div className='col-sm-6 col-lg-4 '>
          <div className="card" id='service-card'>
          <img src={services.postImage} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h1>{services.title}</h1>
              <h5 ></h5>
              <p className="card-text">{services.desc}</p>
             {/* <button className="post-button"><Link to={`/singlePost/${newPost._id}`}>
                Read More
            </Link></button> */}
            </div>
          </div>
      </div>
  )
}

export default Services