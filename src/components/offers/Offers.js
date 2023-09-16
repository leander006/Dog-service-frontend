import React, { useContext } from 'react'
import Offer from '../offer/Offer'
import './offers.css'
function Offers({offers}) {
  return (
    <div className='container' >
      <div className='row'>
      {offers?.map((f) =>(
        <Offer key={f._id} newOffers={f}/>
      ))}
      </div>
    </div>
  )
}

export default Offers