import React from 'react'
import Header from './Header/Header';
import Path from './subcomponent/Path';
import Cource from './subcomponent/Cource';
import Footer from './Footer/Footer';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className='dashboard_section'>
        <Header title={"dashboard"}/>
        <div className='updation_bar'>
            <p><i class="fa-regular fa-clock"></i> Your subscription ends on <span>25 February 2015</span></p>
            <p>Upgrade</p>
        </div>
        <div className='cource_chart_box'>
          <div className='chart_1'>
            <div className='chart_head'>
              <h4>116</h4>
              <ul>
                <li>Angular</li>
                <li>Best Score</li>
              </ul>
              <p>Popular Topics <i class="fa-solid fa-caret-down"></i></p>
            </div>
            <img src="https://i.postimg.cc/Gm0XrwR1/Screenshot-2023-06-22-223131.png" alt="" />
          </div>
          <div className='chart_2'>
            <div className='chart_head'>
              <h4>432</h4>
              <ul>
                <li>Experience IQ</li>
                <li>4 days streak this week</li>
              </ul>
              <p><i class="fa-solid fa-arrow-trend-up"></i></p>
            </div>
            <img src="https://i.postimg.cc/SxWDxTQY/Screenshot-2023-06-22-223303.png" alt="" />
            <img src="https://i.postimg.cc/FRmjnN0T/poster.png" alt="" />
            <div className='arrow3'><i class="fa-solid fa-chevron-right"></i></div>
          </div>
        </div>
        {/* path and cource */}
        <div className='path_cource_section'>
          <div className='path_box'>
            <div className='path_head'>
              <p>Learnig Paths</p>
              <a href="">My learning path</a>
            </div>
            <Path img={'https://i.postimg.cc/GhsZknx4/angularlogo.png'} name={'Angular'}></Path>
            <Path img={'https://i.postimg.cc/j5SzbKSv/swift.jpg'} name={'Swift'}></Path>
            <Path img={'https://i.postimg.cc/HLs2pbSQ/nativelogo.png'} name={'React Native'}></Path>
          </div>
          {/* Cource */}
          <div className='path_box'>
            <div className='path_head'>
              <p>Cources</p>
              <a href="">My Cources</a>
            </div>
            <div className='cource_box'>
              <div className='arrow2'><i class="fa-solid fa-chevron-right"></i></div>
              <Cource img={'https://i.postimg.cc/TYXy6f1x/logo-an.png '} cont={'Learn Angular'}/>
              <Cource img={'https://i.postimg.cc/vBLZVChp/swiftposter.png'} cont={'Build an iOS Application in'}/>
            </div>
          </div>
        </div>
        {/* Discuss */}
        <div className='discussion_box'>
          <p className='dis_header'>Discussions</p>
          <div className='dash_discussion'>
            {/* Top Nav section in discussion box */}
            <div className='top_box'>
              <div className='searchbox'>
                <input type="text"  placeholder='Search discussions' />
                <i class="fa-solid fa-magnifying-glass"></i>
              </div>
              <p className='topbox_topic'>My Post <i class="fa-solid fa-caret-down"></i></p>
              <button className='ask_button_dash'>Ask a question</button>
            </div>
            <hr className='discussion_brake'/>
            {/* discussions in discussion box */}
            <div className='dis_question'>
              <div className='qu_user'>
                <img src="https://i.postimg.cc/zvYV8Jtg/user1.jpg" className='qu_user_icon' alt="" />
                <p className='qu_time'>2 days ago</p>
                <p className='qu_name'>Laza Bogdan</p>
              </div>
              <div className='user_question'>
                <p>Using angular HttpClientModule instead of HttpModule</p>
                <p className='file_priview'>Angular Fundamentals</p>
              </div>
              <div className='answer_list'>
                <p className='answer_count'>1 <br/> <span>answers</span></p>
              </div>
            </div>
            <hr className='discussion_brake'/>
            <div className='dis_question'>
              <div className='qu_user'>
                <img src="https://i.postimg.cc/q7tfw2Jk/user2.jpg" className='qu_user_icon' alt="" />
                <p className='qu_time'>3 days ago</p>
                <p className='qu_name'>Adam Curtis</p>
              </div>
              <div className='user_question'>
                <p>Why am i getting an error when trying to install angular/http@2.4.2</p>
              </div>
              <div className='answer_list'>
                <p className='answer_count'>1 <br/> <span>answers</span></p>
              </div>
            </div>
            <a href=""className='view_discussion_dash'>View more discussions</a>
          </div>
        </div>
        {/* footer */}
        <Footer/>
    </div>
  )
}

export default Dashboard