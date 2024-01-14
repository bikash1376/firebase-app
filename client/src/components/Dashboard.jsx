import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div
        style={{ width: "20%", backgroundColor: "royalblue", height: "100vh" }}
      >
        <Link to='/addStudent' style={{color:'white', display:'block',textDecoration:'none', fontSize:'22px', fontWeight:'500',paddingLeft:'50px'}}>Add Student</Link>
        <Link to='studentList' style={{color:'white', display:'block',textDecoration:'none', fontSize:'22px',fontWeight:'500',paddingLeft:'50px'}}>Student List</Link>
      </div>
      <div style={{ width: "70%", height: "100vh" }}>
        <Outlet/>
      </div>
    </div>
  );
};

export default Dashboard;
