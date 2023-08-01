import React,{useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
const Create = () => {
  const [inputData, setInputData] = useState({
    name:'',
    email:''
  })
  const navigate= useNavigate()
 const handleSubmit =(e)=>{
 e.preventDefault()
 axios.post('http://localhost:8000/users', inputData)
 .then((res)=>{ 
 alert('Data posted successfully')
 navigate("/")}
 )
 }
  return (
<div className='w-100 vh-100 d-flex justify-content-center align-items-center'>
<div className='w-50 border bg-secondary text-white p-5'>
    <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="email" >Email address:</label>
      <input type="email" className="form-control" name="email"
      onChange= {e=>setInputData({...inputData, email:e.target.value})}/>
    </div>
    <div>
      <label htmlFor="name" >Name:</label>
      <input type="text" className="form-control" name="name"
      onChange= {e=>setInputData({...inputData, name:e.target.value})}
      />
    </div>
    <br/>
    <button className="btn btn-primary">Submit</button>
  </form>
  </div>
  </div>

  )
}

export default Create
