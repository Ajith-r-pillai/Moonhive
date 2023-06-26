import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function Edit() {

    const [id,setId]=useState('')
    const [name,setName]= useState('')
    const [email,setEmail]=useState('')
    const [prof,setProf]=useState('')
    const [contact,setContact]=useState(0)
    const [img,setProfile]=useState('')
    const [password,setPassword]= useState('')
    const [day,setDay]= useState('')
    
    
    const [uname,setUname]= useState('')
    const [uemail,setUemail]=useState('')
    const [Uprof,setUprof]=useState('')
    const [Ucontact,setUcontact]=useState(0)
    const [Uimg,setUprofile]=useState('')
    const [Upassword,setUpassword]= useState('')
   
 
    

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
      
    }

    const [error,setError] = useState('')
    
    const editData= async (e)=>{
    e.preventDefault()
 const body={
        id,
        uname,
        uemail,
        Uprof,
        Ucontact,
        Uimg,
        Upassword,
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

         
<div className='reg-main'>
       
       <div class="form">
        
       <div class="form-content">
               <header>Update Form</header>
               <form action="#">
               <div className='field input-field' >
                <input type="text"  placeholder="Name"  onChange={(e)=>setUname(e.target.value)} value={name} />
             
           </div>
                   <div class="field input-field">
                       <input type="email" onChange={(e)=>{setUemail(e.target.value)}} placeholder="Email"  defaultValue={email} class="input"/>
                   </div>

                   <div >
                <select className='field input-field'   onChange={(e)=>setUprof(e.target.value)}>
                    <option defaultValue={prof} value="">Select your profession</option>
                    <option value="student">Student</option>
                    <option value="working">Working</option>
                    <option value="frelancing">Freelancing</option>
                    <option value="tutor">Tutor</option>
                </select>
              
            </div>
                 <div className='field input-field'>
                <input type="number"  placeholder="Contact"  defaultValue={contact} onChange={(e)=>setUcontact(e.target.value)}/>
             
            </div>
            <div className='field input-field'>
              <input type="text"  placeholder="Image URL"  defaultValue={img} onChange={(e)=>setUprofile(e.target.value)}/>
         
            </div>
            <div className='field input-field'>
               <input type="password"  placeholder="Reset Password" onChange={(e)=>setUpassword(e.target.value)} defaultValue={password}/>
             
           </div>
                  
                   <div class="field button-field">
                       <button onClick={e=>editData(e)}>Update</button>
                   </div>
               </form>
            </div>
          </div>
        </div>

  )
}

export default Edit