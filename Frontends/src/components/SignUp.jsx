import React, { useRef, useEffect , useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

function SignUp() {
    const inUsername = useRef(null)
    const inEmail = useRef(null)
    const inPassword = useRef(null)
    const inConPassword = useRef(null)

    const [data, setData] = useState()

    const navigate = useNavigate()

    async function sendDataToBackend(){
        const response = await axios({
          url:"http://localhost:3000/signup",              
          method:"POST",
        data:{
            username: inUsername.current.value,
            email:inEmail.current.value,
            password:inPassword.current.value,
            conPassword:inConPassword.current.value  
        }                              
      })
      await setData(response.data.msg)
      console.log(response.data.msg+"appjsx");
      console.log(data);
      
    }

    // useEffect( ()=>{
    //     sendDataToBackend()
    //   },[inUsername,inEmail,inPassword,inConPassword])

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

  return (
            <form className='border-3'>
                <div className="flex justify-center flex-col items-center h-screen ">
                    <div className=" rounded-xl pb-12 pl-12 pr-12  bg-slate-900">
                    <h1 className='font-bold text-2xl text-center text-white py-8'>Sign Up</h1>
                    <div className='mb-3 flex flex-col'>
                        <label htmlFor="username" className='text-md font-semibold py-1 text-white'>Username </label>
                        <input type="text" id='username' ref={inUsername} className='bg-slate-100 px-4 py-2 rounded-md w-96 focus:outline-none focus:border-blue-500'/>
                    </div>
                    
                    <div className='mb-3 flex flex-col' >
                        <label htmlFor="email" className='text-md font-semibold py-1 text-white'>Email </label>
                        <input type="email" id='email' ref={inEmail} className='bg-slate-100 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500'/>
                    </div>
                    
                    <div className='mb-3 flex flex-col'>
                        <label htmlFor="password" className='text-md font-semibold py-1 text-white'>Password </label>
                        <input type="password" id='password' ref={inPassword} className='bg-slate-100 px-4 py-2 rounded-md focus:outline-none  focus:border-blue-500'/>
                    </div>
                    
                    <div className='mb-3 flex flex-col'>
                        <label htmlFor="confirm" className='text-md font-semibold py-1 text-white'>Confirm Password </label>
                        <input type="password" id='confirm'   ref={inConPassword} className='bg-slate-100 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500'/> 
                    </div>
                    
                    {alert()}

                    <button className='bg-slate-700 px-4 py-2 mt-3 rounded-md text-white w-96' onClick={(event)=>{sendDataToBackend();
                        event.preventDefault()}}>Sign Up</button>
                    <div className='mt-4 text-center text-white'>Already have a account ? <span onClick={()=>{navigate('/signin')}} className='text-indigo-400 cursor-pointer hover:text-indigo-300'>SignIn</span></div>
                    </div>
                </div>
                
            </form>
  )
}

export default SignUp;
