import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

import { useNavigate } from 'react-router-dom'

function EditAccount() {
    
    const [id,setId]=useState('')
    const [uname,setUname]= useState('')
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
        setUname(result.data.user.user_name)
        setEmail(result.data.user.user_email)
        setProf(result.data.user.user_profession)
        setContact(result.data.user.user_contact)
        setProfile(result.data.user.user_profile)
        setPassword(result.data.user.user_password)
        setDay(result.data.user.user_date)
    }
    console.log(uname);

    useEffect(()=>{
        fetchUser()
    })
  return (
    <div>  
        <input type="text"  placeholder="Name"  onChange={(e)=>{setUname(e.target.value)}} value={uname} /></div>
  )
}

export default EditAccount