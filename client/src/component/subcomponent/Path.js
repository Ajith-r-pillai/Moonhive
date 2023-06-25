import React from 'react'
import './Path.css'

function Path({img,name}) {
    var names = name
    var ulStyle;
    if(names==="Swift"){
         ulStyle = {border: '2px solid #9e9e9e',padding:'8px 10px', borderRadius:"5px"}
    }else{
        ulStyle = {border: 'none'}
    }



  return (
    <div className='path_data'>
        <img src={img} alt="" />
        <ul>
            <li>{name}</li>
            <li>24 cources</li>
        </ul>
        <p style={ulStyle}>Resume</p>
    </div>
  )
}

export default Path