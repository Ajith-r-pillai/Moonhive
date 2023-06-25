import React from 'react'
import './Cource.css'


function Cource({img,cont}) {
  var names = cont
  var ulStyle;
  if(names==="Build an iOS Application in"){
       ulStyle = {color:"red"}
  }
  return (
      
        <div className='cource_data'>
          <img src={img} alt="" />
          <div className='cource_footer'>
            <p>{cont}</p>
            <i class="fa-solid fa-heart" style={ulStyle}></i>
          </div>
        </div>

  )
}

export default Cource