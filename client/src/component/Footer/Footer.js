import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div style={{width:"100%"}}>
        <div className='footer_section'>
        <div className='footer_box'>
          <div className='footer_content'>
            <h4>Learn</h4>
            <ul>
              <li><a href="">Library</a></li>
              <li><a href="">Featured</a></li>
              <li><a href="">Explore</a></li>
              <li><a href="">Learning Paths</a></li>
            </ul>
          </div>
          <div className='footer_content'>
            <h4>Join us</h4>
            <ul>
              <li><a href="">Pricing</a></li>
              <li><a href="">Login</a></li>
              <li><a href="">Sign Up</a></li>
              <li><a href="">Payment</a></li>
            </ul>
          </div>
          <div className='footer_content'>
            <h4>Coummunity</h4>
            <ul>
              <li><a href="">Discussions</a></li>
              <li><a href="">Ask Question</a></li>
              <li><a href="">Student Profile</a></li>
              <li><a href="">Instructor Profile</a></li>
            </ul>
          </div>
          <div className='footer_content'>
            <h4><i class="fa-solid fa-book-open"></i>Tutorio</h4>
            <p>Tutorio is an online learning platform that helps 
             anyone achieve there personal and prefessional goals.</p>
          </div>
        </div>
      </div>
      {/* footer contact */}
      <div className='contact_section'>
        <div className='contact_box'>
          <div className='social_media'>
            <p>Follow us</p>
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-vimeo-v"></i>
            <i class="fa-brands fa-youtube"></i>
          </div>
          <button className='language_button'>English <i class="fa-solid fa-caret-down"></i></button>
          <div className='copyright'>
            <a href="">Terms</a>
            <a href="">privacy policy</a>
            <p>Copyright 2019 	&#169; All rights reserved</p>
          </div>
        </div>
      </div>
      {/* Footer final */}
      <div className='footer_final'>
        <ul>
          <li>Catalog <i class="fa-solid fa-caret-up"></i></li>
          <li>Student <i class="fa-solid fa-caret-up"></i></li>
          <li>Instructor <i class="fa-solid fa-caret-up"></i></li>
          <li>Coummunity <i class="fa-solid fa-caret-up"></i></li>
          <li>Account <i class="fa-solid fa-caret-up"></i></li>
          <li>Components <i class="fa-solid fa-caret-up"></i></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer