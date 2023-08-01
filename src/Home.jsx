import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:8000/users")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  //console.log(data)
  if (!data) return null;

  const handleDelete = (id) => {
    const confirm = window.confirm("Do you wanted to delete");
    if (confirm) {
      axios.delete("http://localhost:8000/users/"+id)
        .then(res => {
          alert("Data deleted");
          navigate("/");
          window.location.reload(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="container mt-5">
      <h2>Curd with json server with axios</h2>
      <div className="position-relative">
        <Link
          to="/create"
          className="btn btn-success position-absolute top-0 end-0"
        >
          {" "}
          Create +
        </Link>
      </div>

      <table className="table mt-5">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>
                <Link
                  to={`/update/${item.id}`}
                  className="btn btn-primary mx-2"
                >
                  Update
                </Link>
                <Link to={`/read/${item.id}`} className="btn btn-info">
                  Read
                </Link>
                <button
                  className="btn btn-danger mx-2"
                  onClick={e=>handleDelete(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
