import React ,{useRef, useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
// import AlertBox from './AlertBox'
import axios from 'axios'

function SignIn() {
    const inUsername = useRef(null)
    const inPassword = useRef(null)
    const [data,setData] = useState()
    const navigate = useNavigate()

  async function sendDataToBackend(){
    const response = await axios({
      url:"http://localhost:3000/signin",              
      method:"POST",
    data:{
        username: inUsername.current.value,
        password:inPassword.current.value,
    }                              
  })
  await setData(response.data.msg)
  console.log(response.data.msg+"Signin");
  console.log(response);
  
}

function alert(){
    if(!data){
        return
    }else if (data==="user already exists please signin" || data === "Invalid Input") {
        return <>
        <div className="text-center p-2 rounded-md bg-red-300 text-red-900">{data}!</div>
    </> 
    }else if(data==="User created successfully !" || data==="Signin successfull!"){
        return <>
        <div className="text-center p-2 rounded-md bg-green-300 text-green-900">{data}</div>
    </>
    }
}

useEffect( ()=>{
    sendDataToBackend()
  },[inUsername,inPassword])
  return (
    <div>
      <form  className='border-3'>
                <div className="flex justify-center flex-col items-center h-screen w-full">

                    <div className="border-2 rounded-xl pb-12 pl-12 pr-12  bg-slate-900">

                    <h1 className='font-bold text-2xl text-center text-white py-8'>Login</h1>

                    <div className='mb-3 flex flex-col'>
                        <label htmlFor="username" className='text-md font-semibold py-1 text-white'>Username </label>
                        <input type="text" id='username' ref={inUsername} className='bg-slate-100 px-4 py-2 rounded-md w-96 focus:outline-none focus:border-blue-500'/>
                    </div>
                    
                    <div className='mb-3 flex flex-col'>
                        <label htmlFor="password" className='text-md font-semibold py-1 text-white'>Password </label>
                        <input type="password" id='password' ref={inPassword} className='bg-slate-100 px-4 py-2 rounded-md focus:outline-none  focus:border-blue-500'/>
                        <div className='mt-1'><a href="" className='text-indigo-500 '>Forgot Password?</a></div>
                    </div>

                    
                    {
                        alert()
                    }
                    

                    <button onClick={(event)=>{event.preventDefault(); sendDataToBackend()}} className='bg-slate-700 px-4 py-2 mt-2 rounded-md text-white w-96' >Login</button>

                    <div className='mt-4 text-center text-white'><span>Don't have a account ? <span onClick={(event)=>{
                        
                        navigate('/signup')
                    }} className='cursor-pointer text-indigo-400 hover:text-indigo-300'>SignUp</span></span></div>
                    </div>
                </div>
                
            </form>
    </div>
  )
}



export default SignIn