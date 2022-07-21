import React, {useState, useEffect} from 'react'; 
import {Link} from "react-router-dom"; 
import "./Home.css"; 
import {toast} from "react-toastify"; 
import axios from "axios"; 


const Home = () => {
  const [dta, setData] = useState ([]); 

  const loadData = async () => {
    const response = await axios.get("http://localhost:5000/api/get"); 
    setData(response.data);   
  }; 

  useEffect(() => {
    loadData(); 
  }, []); 

  return (
    <div style={{marginTop: "150px"}}>
      <table className="styled-table">
        <thead>
          <tr>
            <th style={{textAlign: "center"}}>No.</th>
            <th style={{textAlign: "center"}}>Name</th>
            <th style={{textAlign: "center"}}>Email</th>
            <th style={{textAlign: "center"}}>Contact</th>
            <th style={{textAlign: "center"}}>Action</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default Home; 
