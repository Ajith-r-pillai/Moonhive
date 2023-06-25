import React, { useEffect, useState } from 'react'
import './Discussion.css'
import Header from './Header/Header';
import Footer from './Footer/Footer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Discussion() {
  const [search,setSearch] =useState('')
  function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }

  const location = useNavigate()

  const [ques,setQues] = useState('')
  const eid = (JSON.parse(localStorage.getItem("userid") || " "))
  const name = (JSON.parse(localStorage.getItem("username") || " "))
  const uimg = (JSON.parse(localStorage.getItem("userimg") || " "))
  const sendQues = async(e)=>{
  
    const body ={
      eid,
      name,
      ques,
      uimg,
   
    }
    try{
      const result = await axios.post('http://localhost:8000/addqustion',body)
      alert(result.data.message)
      location('/dashboard')
    }catch(error){
      alert(error.response.data.message)
    }
}
const [alldata,setAlldata] = useState([])
const fetchQues = async ()=>{
  const result = await axios.get('http://localhost:8000/getQuestion')
  console.log(result.data);
  setAlldata(result.data.user)

}
    useEffect(()=>{
      fetchQues()
    },[])
  return (
    <div className='Discussion_section'>
      {/* user box*/}
      <Header/>
      {/* Discussion section */}
      <div className='discussion-box-main'>
        <p className='discussion-header'>Discussions</p>
        <div className='discussion'>
          {/* Top Nav section in discussion box */}
          <div className='top_box'>
            <div className='searchbox'>
              <input type="text"  placeholder='Search discussions' onChange={(e)=>setSearch(e.target.value)} />
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <p className='topbox_topic'>All Topics <i class="fa-solid fa-caret-down"></i></p>
            <p className='topbox_topic'>Newest <i class="fa-solid fa-caret-down"></i></p>
            <button className='ask_button' onClick={(e)=> myFunction(e)}>Ask a question</button>
          </div>
          <div className='ask_box' id='myPopup'>
            <textarea onChange={(e)=>{setQues(e.target.value)}} ></textarea>
            <button className='submit_ask' onClick={(e)=>{sendQues(e)}}>Submit</button>
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

          {alldata?.filter((item)=>{
                        if(search == ""){
                            return item
                        }else if(item.question.toLowerCase().includes(search.toLowerCase())){
                            return item
                        }
                    }).map((item)=>(


          <div className='dis_question'>
            <div className='qu_user'>
              <img src={item.img} className='qu_user_icon' alt="" />
              <p className='qu_time'>2 days ago</p>
              <p className='qu_name'>{item.name}</p>
            </div>
            <div className='user_question'>
              <p>{item.question}</p>
            </div>
            <div className='answer_list'>
              <p className='answer_count'>1 <br/> <span>answers</span></p>
            </div>
            <hr className='discussion_brake'/>
          </div>
          
          ))}
      

          <hr className='discussion_brake'/>
          <a href=""className='view_discussion'>View more discussions</a>
        </div>
      </div>
      {/* Footer */}
      <Footer/>
    </div>
  )
}

export default Discussion