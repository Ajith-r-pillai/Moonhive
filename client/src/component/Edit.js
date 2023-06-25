import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

import { useNavigate } from 'react-router-dom'
import Register from './Register'

function Edit() {

    const [id,setId]=useState('')
    const [name,setName]= useState('')
    const [email,setEmail]=useState('')
    const [prof,setProf]=useState('')
    const [contact,setContact]=useState(0)
    const [img,setProfile]=useState('')
    const [password,setPassword]= useState('')
    const [day,setDay]= useState('')

    const location = useNavigate()
    const params = useParams('')

    const fetchUser= async ()=>{
        const result = await axios.get('http://localhost:8000/getdata/'+params.id)
    
        setId(result.data.user.user_id)
        setName(result.data.user.user_name)
        setEmail(result.data.user.user_email)
        setProf(result.data.user.user_profession)
        setContact(result.data.user.user_contact)
        setProfile(result.data.user.user_profile)
        setPassword(result.data.user.user_password)
        setDay(result.data.user.user_date)
    }

    const [error,setError] = useState('')
    const editData= async (e)=>{
    e.preventDefault()



    const body={
        id,
        name,
        email,
        prof,
        contact,
        img,
        password,
        day
    }
    try{
        const result = await axios.post('http://localhost:8000/edituser',body)
        alert(result.data.message)
        location('/dashboard')
    }catch(er){
        setError(error.response.data.message)
    }
}
    useEffect(()=>{
        fetchUser()
    })
  return (
        // <div className='register_section'>
        //     <div className='register_box'>
        //         <p className='register_head'>Edit Account</p>
        //         {/* <p>{error}</p> */}
        //         <div className='reg_inp_box'>
        //             <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
        //             <label>Name</label>
        //         </div>
        //         <div className='reg_inp_box'>
        //             <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        //             <label>Email</label>
        //         </div>
        //         <div className='reg_inp_box'>
        //             <select value={prof} onChange={(e)=>{setProf(e.target.value)}}>
        //                 <option value="">Select your profession</option>
        //                 <option value="student">Student</option>
        //                 <option value="working">Working</option>
        //                 <option value="frelancing">Freelancing</option>
        //                 <option value="tutor">Tutor</option>
        //             </select>
        //             <label>Professsion</label>
        //         </div>
        //         <div className='reg_inp_box'>
        //             <input type="text" value={contact} onChange={(e)=>{setContact(e.target.value)}}/>
        //             <label>Contact</label>
        //         </div>
        //         <div className='reg_inp_box'>
        //             <input type="text" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        //             <label>Password</label>
        //         </div>
        //         <div className='reg_btn_box'>
        //             <button className='reg_btn' onClick={(e)=>{editData(e)}}>Submit</button>
        //         </div>
        //     </div>
        // </div>
      //   <div className="register_section">
      // <div className="register_box">
      //   <p className="register_head">Edit Account</p>
      //     <div  className="reg_inp_box">
      //       <input
      //         type="text"
      //         onChange={(e) => setName(e.target.value)}
      //         value={name}
      //       />
      //       <label>Name</label>
      //     </div>
      //     <div className="reg_inp_box">
      //       <input
      //         type="text"
      //         onChange={(e)=>setEmail(e.target.value)}
      //         value={email}
      //       />
      //       <label>Email</label>
      //     </div>
  
      //     <div className="reg_inp_box">
      //       <select value={prof} onChange={(e) => setProf(e.target.value)}>
      //         <option>select your possition</option>
      //         <option>Student</option>
      //         <option>Working</option>
      //         <option>Freelancing</option>
      //         <option>Tutor</option>
      //       </select>
      //       <label>possition</label>
      //     </div>
      //     <div className="reg_inp_box">
      //       <input
      //         type="text"
      //         onChange={(e) => setContact(e.target.value)}
      //         value={contact}
      //       />
      //       <label>Contact</label>
      //     </div>
      //     <div className="reg_inp_box">
      //       <input
      //         type="text"
      //         onChange={(e) => setContact(e.target.value)}
      //         value={img}
      //       />
      //       <label>Contact</label>
      //     </div>
      //     <div className="reg_inp_box">
      //       <input
      //         type="password"
      //         onChange={(e) => setPassword(e.target.value)}
      //         value={password}
      //       />
      //       <label>Password</label>
      //     </div>
      //     <div className="reg_btn_box">
      //       <button className="reg_btn" onClick={(e)=>editData(e)}>Submit</button>
      //     </div>
         
      // </div>
      // </div>
         
<div className='reg-main'>
       
       <div class="form">
        
       <div class="form-content">
               <header>Sign Up</header>
               <form action="#">
               <div className='field input-field' >
                <input type="text"  placeholder="Name"  onChange={(e)=>{setName(e.target.value)}}  value={name}/>
             
           </div>
                   <div class="field input-field">
                       <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" class="input"/>
                   </div>

                   <div >
                <select className='field input-field' onChange={(e)=>{setProf(e.target.value)}}>
                    <option value="">Select your profession</option>
                    <option value="student">Student</option>
                    <option value="working">Working</option>
                    <option value="frelancing">Freelancing</option>
                    <option value="tutor">Tutor</option>
                </select>
              
            </div>
                 
                   <div className='field input-field'>
                <input type="number"  placeholder="Contact" onChange={(e)=>{setContact(e.target.value)}}/>
             
            </div>
            <div className='field input-field'>
              <input type="text"  placeholder="Image URL" onChange={(e)=>{setProfile(e.target.value)}}/>
         
            </div>
            <div className='field input-field'>
               <input type="password"  placeholder="Set Password"onChange={(e)=>{setPassword(e.target.value)}}/>
             
           </div>
                  
                   <div class="field button-field">
                       <button >SignUP</button>
                   </div>
               </form>
               <div class="form-link">
                   <span>Already Signed Up?<Link to={'/'} >Login</Link></span>
               </div>
           </div>
          
          
       </div>
   
</div>

  )
}

export default Edit