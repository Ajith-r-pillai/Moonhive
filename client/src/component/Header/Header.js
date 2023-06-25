import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header({title}) {
const editid = (JSON.parse(localStorage.getItem("userid") || " "))
  return (
    <div className='header_user'>
        {/* icon and details  */}
        <div className='section1'>
            <img src="https://i.postimg.cc/yNvxdS0y/icon.png" className="fa-user-graduate " alt="" /> 
            <div className='section2'>
            <p className='user_name'>Alexander Watson</p>
            <p className='user_pref'>Student</p>
            <p className='user_iq'><i class="fa-solid fa-droplet"></i> 2300IQ</p>
            </div>
            <Link to={`/edit/${editid}`} className='edit_btn'>Edit Contact</Link>
        </div>
        <hr className='braker'/>
        {/* Navigation */}
        <div className='dis_nav'>
            <Link to={'/dashboard'}  className='nav_item'>Dashboard</Link>
            <Link to={'/cource'} className='nav_item'>Cource</Link>
            <Link to={'/discussion'} className='nav_item'>Discussion</Link>
            <a href="" className='nav_item'>Profile</a>
        </div>
    </div>
  )
}

export default Header