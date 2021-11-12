import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../component/Navbar/Navbar";
import Sidebar from "../../component/Sidebar/Sidebar";
import Create from "../Staff/Create";
import "./home.css";

const Home = () => {
  return (
    <div className="Home">
      <div className="container">
        {/* <div className="others">
          <Create />
        </div> */}

        <Link to={"/staff/create"}>
          <h1>hello</h1>
        </Link>
        <h1>hello</h1>
      </div>
    </div>
  );
};

export default Home;
