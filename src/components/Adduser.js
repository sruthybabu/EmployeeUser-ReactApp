import React, { useState } from 'react'

const Adduser = () => {
    var [newname,setNewname]=useState("")
    var [email,setEmail]=useState("")
    var [address,setAddress]=useState("")
    var [phone,setPhone]=useState("")
    var [web,setWeb]=useState("")
    var [company,setCom]=useState("")
    var [name,setName]=useState("")
    var [pass,setPass]=useState("")
    var [cpass,setCpass]=useState("")
    const subData=()=>{
        const data={"newname":newname,"email":email,"address":address,"phone":phone,"web":web,"company":company,"name":name,"pass":pass,"cpass":cpass}
        console.log(data)
    }
  return (
    <div>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Name</label>
                    <input onChange={(e)=>{setNewname(e.target.value)}} placeholder="enter your name" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Email</label>
                  <input  onChange={(e)=>{setEmail(e.target.value)}} placeholder="enter your email id" type="email" name="" id="" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Address</label>
                   <textarea onChange={(e)=>{setAddress(e.target.value)}} placeholder="enter your address" name="" id="" cols="30" rows="10" className="form-control"></textarea>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Phone No</label>
                    <input onChange={(e)=>{setPhone(e.target.value)}} placeholder="enter your phone no" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Website</label>
                    <input onChange={(e)=>{setWeb(e.target.value)}} placeholder="enter website" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Comapny</label>
                    <input onChange={(e)=>{setCom(e.target.value)}} placeholder="enter comapny name" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">User Name</label>
                    <input onChange={(e)=>{setName(e.target.value)}} placeholder="enter your user name" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Password</label>
                    <input onChange={(e)=>{setPass(e.target.value)}} placeholder="enter your password" type="password" name="" id="" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">confirm Password</label>
                    <input onChange={(e)=>{setCpass(e.target.value)}} placeholder="enter your password" type="password" name="" id="" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={subData} className="btn btn-success">REGISTER</button>
                </div>
            </div>
        </div>
    </div>
</div>



    </div>
  )
}

export default Adduser