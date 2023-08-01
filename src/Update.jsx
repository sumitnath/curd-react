import React,{useState, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import axios from 'axios'

const Update = () => {
 const {id} = useParams();

    const [inputData, setInputData] = useState(
        {   id: id, 
            name:'',
            email:''
          }
    );

const navigate = useNavigate();

useEffect(()=>{
 axios.get('http://localhost:8000/users/'+id)
.then(res=>setInputData(res.data))
.catch((err)=>console.log(err))
},[])


const handleSubmit =(e)=>{
    e.preventDefault();
    axios.put('http://localhost:8000/users/'+id, inputData)
    .then((res)=>{ 
    alert('Data Updated successfully')
    navigate("/")}
    )
}

  return (
    <div className='w-100 vh-100 d-flex justify-content-center align-items-center'>
<div className='w-50 border bg-secondary text-white p-5'>
    <form onSubmit={handleSubmit}>
    <div>
    <label htmlFor="id" >ID:</label>
    <input type="number" className="form-control" disabled
     name="id"
     value={inputData.id}
   />
  </div>
    <div>
      <label htmlFor="email" >Email address:</label>
      <input type="email" className="form-control"
       name="email"
       value={inputData.email}
      onChange= {e=>setInputData({...inputData, email:e.target.value})}/>
    </div>
    <div>
      <label htmlFor="name" >Name:</label>
      <input type="text" className="form-control" name="name"
      value={inputData.name}
      onChange= {e=>setInputData({...inputData, name:e.target.value})}
      />
    </div>
    <br/>
    <button className="btn btn-primary">Update</button>
  </form>
  </div>
  </div>

  )
}

export default Update
