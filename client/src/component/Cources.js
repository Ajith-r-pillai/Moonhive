import React from 'react'
import'./Cources.css'
import Header from './Header/Header'

import Footer from './Footer/Footer'
import Path from './subcomponent/Path'
import Cource from './subcomponent/Cource'


function Cources() {
  return (
    <div className='cource_sec'>
        <Header/>
        <div className='cource_typescript'>
            <img src="https://i.postimg.cc/8P7Pkmn4/typescript.png" alt="" />
            <ul className='cource_ul'>
                <li><i class="fa-regular fa-clock"></i> 50 minutes left</li>
                <li><i class="fa-regular fa-circle-play"></i>12 lessons</li>
            </ul>              
            <div className='cource_ts_btn'>
                <button>Resume</button>
                <button>Start over</button>
            </div>
            <div className='cource_ts'>
                <img src="https://i.postimg.cc/GhsZknx4/angularlogo.png" alt="" />
                <ul>
                    <li>Angular Fundamentals</li>
                    <li>with Elijah Murray</li>
                </ul>
                <p>Your rating <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i> <span>4/5</span></p>
            </div>
        </div>

        <div className='cource_path_box'>
            <div className='path_head'>
                <p>Learnig Paths</p>
                <a href="">My learning path</a>
            </div>
            <div className='cource_path_sec'>
                <Path img={'https://i.postimg.cc/GhsZknx4/angularlogo.png'} name={"Angular"} />
                
            </div>
            <div className='cource_path_sec'>
                <Path img={'https://i.postimg.cc/j5SzbKSv/swift.jpg'} name={"Swift"} />
            </div>
            <div className='cource_path_sec'>
                < Path img={'https://i.postimg.cc/Y0H9h3t4/wordpreslogo.png'} name={"WordPress"} />
            </div>
            <div className='cource_path_sec'>
                <Path img={'https://i.postimg.cc/HLs2pbSQ/nativelogo.png'} name={"React Native"} />
            </div>
        </div>

        <div className='cource_path_box2'>
            <div className='path_head'>
              <p>Cources</p>
              <a href="">My Cources</a>
            </div>
            <div className='cource_path_sec2'>
                <Cource img={'https://i.postimg.cc/TYXy6f1x/logo-an.png'} cont={'Learn Angular'}/>
                <Cource img={'https://i.postimg.cc/vBLZVChp/swiftposter.png'} cont={'Build an iOS Application in'}/>
            </div>
            <div className='cource_path_sec2'>
                <div className='arrow1'><i class="fa-solid fa-chevron-right"></i></div>
                <Cource img={'https://i.postimg.cc/Rh2jSMK4/wordpres.png'} cont={'Build a WordPress Website'}/>
                <Cource img={'https://i.postimg.cc/3wHYjZyY/rnative.png'} cont={'Become a React Native'}/>
            </div>
        </div>

        <div className='cource_path_box3'>
            <div className='arrow1'><i class="fa-solid fa-chevron-right"></i></div>
            <div className='path_head'>
              <p>Achivements</p>
              <a href="">My Achivements</a>
            </div>
            <div className='cource_path_sec'>
                <img src="https://i.postimg.cc/FRmjnN0T/poster.png" alt="" />
            </div>
            <div className='cource_path_sec'>
                <img src="https://i.postimg.cc/RVWztYZj/angularposter.png" alt="" />
            </div>
        </div>
        <Footer/>

    </div>
  )
}

export default Cources