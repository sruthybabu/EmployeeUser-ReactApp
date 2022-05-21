import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
   var [name,setName]=useState("")
   var [pass,setPass]=useState("")
   const subData=()=>{
     const data={"name":name,"pass":pass}
       console.log(data)
   }
  return (
    <div>
        <Header/>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">User Name</label>
                    <input onChange={(e)=>{setName(e.target.value)}} placeholder="enter your user name" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Password</label>
                    <input onChange={(e)=>{setPass(e.target.value)}} placeholder="enter your password" type="password" name="" id="" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={subData} className="btn btn-success">Login</button>
                </div>
            </div>
        </div>
    </div>
</div>


    </div>
  )
}

export default Login