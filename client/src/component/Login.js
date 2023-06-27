import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

function Login() {
    var location= useNavigate()
    const [id,setId]=useState('')
    const [pass,setPassword]=useState('')
    const [er,setError] = useState('')

    const userLogin = async (e)=>{
        e.preventDefault()
        const body={
            id,
            pass
        }
        try{
            const result = await axios.post('http://localhost:8000/login',body)
            localStorage.setItem("userid",JSON.stringify(result.data.user.user_id))
            localStorage.setItem("username",JSON.stringify(result.data.user.user_name))
            localStorage.setItem("userimg",JSON.stringify(result.data.user.user_profile))
            setError(result.data.message);
            alert(result.data.message);

            location('dashboard')
        }catch(error){
            setError(error.response.data.message)
          }
    }
  return (
 
<div className='reg-main'>
        <div class="form login">
         
        <div class="form-content">
                <header>Login</header>
                <form action="#">
                    <div class="field input-field">
                    <input type="email" placeholder='Email' onChange={(e)=>{setId(e.target.value)}}/>
             
                    </div>
                    <div class="field input-field">
                    <input type="password" placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}}/>
                       
                    </div>
                    <div class="form-link">
                        <a href="#" class="forgot-pass">Forgot password?</a>
                    </div>
                    <div class="field button-field">
                        <button onClick={(e)=>userLogin(e)}>Login</button>
                    </div>
                </form>
                <div class="form-link">
                    <span>Don't have an account?<Link to={'register'} >create new account</Link></span>
                </div>
            </div>
            <div class="line"></div>
            <div class="media-options">
                <a href="#" class="field facebook">
                    <img src="https://i.postimg.cc/BvRFsXWZ/fb.png" alt="" class="google-img"/>
                     <span>Login with Facebook</span>
                </a>
            </div>
            <div class="media-options">
                <a href="#" class="field google">
                    <img src="https://i.postimg.cc/wThYQPxw/g.png" alt="" class="google-img"/>
                    <span>Login with Google</span>
                </a>
            </div>
        </div>
</div>
  )
}

export default Login