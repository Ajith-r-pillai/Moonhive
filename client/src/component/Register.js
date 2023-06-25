import React, { useEffect, useState } from 'react'
import './Register.css'
import axios from 'axios'
import uuid from 'react-uuid'
import { Link, useNavigate } from 'react-router-dom'

function Register() {


  



    const [id,setId] = useState('')
    const [name,setName]= useState('')
    const [email,setEmail]=useState('')
    const [prof,setProf]=useState('')
    const [contact,setContact]=useState(0)
    const [profile,setProfile]=useState('')
    const [password,setPassword]= useState('')
    const [day,setDay]=useState('')
    const [error,setError] = useState('')

    const location = useNavigate()

    const register =async (e)=>{
        e.preventDefault()
        console.log(prof);
        console.log(name);
        setId(uuid().slice(0,3))
        const body= {
            id,
            name,
            email,
            prof,
            contact,
            profile,
            password,
            day
        }
        try{
            const result = await axios.post('http://localhost:8000/register',body)
            alert(result.data.message)
            location('/')
        }catch(error){
            setError(error.response.data.message)
        }

    }

    useEffect(()=>{
        var d = new Date()
        setDay(d)
        setId(uuid().slice(0,3))
    },[])
  return (

  
   
<div className='reg-main'>
       
        <div class="form">
         
        <div class="form-content">
                <header>Sign Up</header>
                <form action="#">
                <div className='field input-field' >
                 <input type="text"  placeholder="Name" onChange={(e)=>{setName(e.target.value)}}/>
              
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
                        <button onClick={(e)=>{register(e)}}>SignUP</button>
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

export default Register