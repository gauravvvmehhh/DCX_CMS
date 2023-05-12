
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SiPowerpages} from "react-icons/si";

export default function AddPage() {
    const history = useNavigate();
    const [formData, setFormData] = useState({
        Pagetitle: "",
        Author: "",
        Category: ""
    });

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/pages', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert("Record added successfully!");
                setFormData({
                   Pagetitle: "",
                    Category: "",
                    Author: ""
                });
                history("/Page");
            } else {
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
                <h1  style={{ color: '#333399',fontFamily:"cursive"}}><SiPowerpages/>Add Record For Pages</h1>
              
                <form onSubmit={handleSubmit} className='frm-bg'>
                    <div class="form-group">
                        <label >Pagetitle:</label><br/>
                        <input type="text" name="Pagetitle" class="form-control" value={formData.Pagetitle} onChange={handleChange} placeholder="Enter Pagetitle" required></input>
                    </div>
                    <div class="form-group">
                        <label>Category:</label><br/>
                        <input type="text" class="form-control" name="Category" value={formData.Category} onChange={handleChange} placeholder="Enter Category Name" required></input>
                    </div>
                    <div class="form-group">
                        <label>Author:</label><br/>
                        <input type="text" class="form-control" name="Author" value={formData.Author} onChange={handleChange} placeholder="Enter Author Name" required></input>
                    </div>
                    <br></br>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    
}

