import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'



const Read = () => {
    const navigate = useNavigate();
    const{id} = useParams();
    const [data, setData] = useState([])
  
    useEffect(()=>{
        axios.get("http://localhost:8000/users/"+id)
        .then(res=> setData(res.data))
        .catch(err=>console.log(err))
    },[])
  //console.log(data)
    return (
    <div className='Container'>
      <div className="container p-5">
      <div className="card" style={{width: '25rem'}}>

  <div className="card-body justify-content-center align-items-center">
    <h5 className="card-title"> Name: {data.name}</h5>
    <p className="card-text">Email : {data.email}</p>
    <p className="card-text">Id : {data.id}</p>
    <Link className="btn btn-primary" to="/">Back</Link>
  </div>
</div>
      </div>
    </div>
  )
}

export default Read
