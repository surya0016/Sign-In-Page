import React, { useState } from 'react'

function AlertBox({msg}) {
    const [alert,setAlert] = useState()
    setAlert(msg)
    if(!msg){
        return
    }else if (alert==="user already exists please signin" || alert === "Invalid Input" || alert==="Signin successfull!") {
        return <>
        <div className="text-center p-2 rounded-md bg-red-300 text-red-900">{alert}!</div>
    </> 
    }else if(alert==="User created successfully !" || alert==="Signin successfull!"){
        return <>
        <div className="text-center p-2 rounded-md bg-green-300 text-green-900">{alert}!</div>
    </>
    }
}

export default AlertBox
