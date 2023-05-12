import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const callApi = async () => {
    const result = await fetch("http://localhost:5000/logins");
    const users = await result.json();
    return users;
  };
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const Navig = useNavigate();

  const handleSubmit = async (event) => {
    debugger;
    event.preventDefault();
    let users = await callApi();
    let userFound = users.find(
      (user) =>
        user.username === formData.username &&
        user.password === formData.password
    );
    if (userFound) {
      Navig("/Dashboard");
      sessionStorage.setItem("loggedInUser", JSON.stringify(userFound));
    } else {
      alert("User Invalid");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="mt-5">
      <h1 style={{ color: "#333399", fontFamily: "cursive",textAlign:"center" }}>Login</h1>

      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            class="form-control"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter Username"
            required
          ></input>
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            class="form-control"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter Password"
            required
          ></input>
        </div>
        <br></br>
        <button type="submit" class="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}
