
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSnapchat } from "react-icons/fa";

export default function AddRecordForm() {
    // let recordAdded = false;
    const history = useNavigate();
    const [formData, setFormData] = useState({
        FullName: "",
        Email: "",
        Group: ""
    });

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/users', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // recordAdded = true;
                setFormData({
                    FullName: "",
                    Email: "",
                    Group: ""
                });
                 history("/User");
            } else {
                // recordAdded = false;
                console.error("Error:", response.statusText);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }


    return (
        <div className="mt-5">
            <h1 style={{ color: '#333399', fontFamily: "cursive" }}><FaSnapchat />Add Record For User</h1>

            <form onSubmit={handleSubmit} className='frm-bg'>
                <div class="form-group">
                    <label >FullName:</label><br/>
                    <input type="text" name="FullName" class="form-control" value={formData.FullName} onChange={handleChange} placeholder="Enter Full Name" required></input>
                </div>
                <div class="form-group">
                    <label>Email:</label><br/>
                    <input type="text" class="form-control" name="Email" value={formData.Email} onChange={handleChange} placeholder="Enter Email" required></input>
                </div>
                <div class="form-group">
                    <label>Group:</label><br/> 
                    <input type="text" class="form-control" name="Group" value={formData.Group} onChange={handleChange} placeholder="Enter Group" required></input>
                </div>
                <br></br>
                {/* {recordAdded == true ? <span style={{ color: "green" }}>Record Added successfully</span> : ""}
                <br /> */}
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    );

}

