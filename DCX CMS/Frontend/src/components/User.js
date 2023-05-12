import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';
import { Button } from 'react-bootstrap';
import { HiUsers } from "react-icons/hi2";
import { CiEdit } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { BsPersonFillAdd } from "react-icons/bs";


export default function User() {
    
    const [use, setuser] = useState([]);
    
    //Fetch the data with async functions and await keyword
    const result = async () => {
        const data = await fetch('http://localhost:5000/users');
        const result = await data.json();
        setuser(result);
    }
    
    //Rendering result method once with useEffect
    useEffect(() => {
        result();
    }, []);
    
    
    
    const history = useNavigate()
    
    
    const handleAddRecord = () => {

        history("/adduser");
    };

    const handleDelete = async (_id) => {
        debugger
        await fetch(`http://localhost:5000/users/${_id}`, {
            method: "DELETE",

        })
        setuser(use.filter((item) => item._id !== _id));
    };

    const [editUser, setEditUser] = useState([]);
    
    const handleEditUser = (item) => {
        setEditUser(item);
    };

    const handleUpdateUser = (event) => {
        event.preventDefault();

        debugger;

        fetch(`http://localhost:5000/users/${editUser._id}`, {

            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(editUser)


        }).then(response => response.json())
            .then(data => {
                setuser(use.map(user => {
                    if (user._id === data._id) {
                        return data;
                    }
                    return user;
                }));
                setEditUser(data);
            });

            
    };


    return (
        <div>
            <div className='mt-3'>
                <h1 style={{ color: '#202A44' ,fontFamily:'Baskerville',fontSize:''}}><HiUsers /> Users</h1>
            </div>
            <hr />
            <div>
                <Button onClick={() => handleAddRecord()}><BsPersonFillAdd/> Add User</Button>
            </div>

            <br />

            <div>
                <Table striped bordered hover size="lg">
                    <thead>
                        <tr>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Group</th>
                            <th>Actions</th>
                        </tr>

                    </thead>
                    <tbody>

                        {
                            use.map((item) => (

                                <tr key={item._id}>

                                    <td>{item.FullName}</td>
                                    <td>{item.Email}</td>
                                    <td>{item.Group}</td>
                                    <td>
                                        <Button onClick={() => handleEditUser(item)}><CiEdit />Edit</Button> | <Button className='btn btn-danger' onClick={() => handleDelete(item._id)}><RxCross2 />Delete</Button>
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </Table>
            </div>
            <div>

                {editUser && (

                    <form onSubmit={handleUpdateUser} className='frm-bg'>
                        <div class="form-group">
                            <label >FullName:</label>
                            <input type="text" class="form-control" value={editUser.FullName} onChange={e => setEditUser({ ...editUser, FullName: e.target.value })} placeholder="Enter Full Name"></input>
                        </div>
                        <div class="form-group">
                            <label>Email:</label>
                            <input type="text" class="form-control" value={editUser.Email} onChange={e => setEditUser({ ...editUser, Email: e.target.value })} placeholder="Enter the Email id"></input>
                        </div>
                        <div class="form-group">
                            <label>Group:</label>
                            <input type="text" class="form-control" value={editUser.Group} onChange={e => setEditUser({ ...editUser, Group: e.target.value })} placeholder="Enter the Group"></input>
                        </div>
                        <br></br>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                )}
            </div>
            <br />

            <div>
                <Pagination>
                    <Pagination.First />
                    <Pagination.Item>{1}</Pagination.Item>
                    <Pagination.Item>{2}</Pagination.Item>
                    <Pagination.Item>{3}</Pagination.Item>
                    <Pagination.Item active>{4}</Pagination.Item>
                    <Pagination.Item>{5}</Pagination.Item>
                    <Pagination.Item>{6}</Pagination.Item>
                    <Pagination.Last />
                </Pagination>
            </div>

        </div>

    );
}

