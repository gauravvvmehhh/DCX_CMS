import Navi from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Page from "./components/Page";
import Category from "./components/Category";
import User from "./components/User";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import AddRecordForm from "./components/adduser";
import AddPage from "./components/addpage";
import Login from "./components/Login";
// import { useState } from "react";

export default function App() {
  // let loggedInUser = sessionStorage.getItem("loggedInUser");

  // const [isLoggedIn, setLoggedIn] = useState();

  return (
    <>
    
      <Navi data="DCX CMS" />
      <div className="row">
        <Sidebar />

        <div className="col-md-8">
          <Content />
        </div>
      </div>
      <Footer />
    
    </>

  );
}

function Content() {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/Dashboard" element={<Dashboard />}></Route>
      <Route path="/Page" element={<Page />}></Route>
      <Route path="/Category" element={<Category />}></Route>
      <Route path="/User" element={<User />}></Route>
      <Route exact path="/adduser" element={<AddRecordForm />} />

      <Route exact path="/addpage" element={<AddPage />} />
    </Routes>
  );
}
