import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import Pagination from 'react-bootstrap/Pagination';
import { HiDocumentText } from "react-icons/hi2";
import { CiEdit } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';
import { BsPersonFillAdd } from "react-icons/bs";

export default function Page() {
  useEffect(()=>{
    result();
  },[]);
  const [dash,setdash]=useState([]);
const result=async ()=>{
  const data=await fetch('http://localhost:5000/pages');
  const result=await data.json();
  console.warn(result);
  setdash(result);
}

const [editPage, setEditPage] = useState([]);
const handleEditPage = (item) => {
  debugger
    setEditPage(item);
};

const handleUpdatePage = async (event) => {
    event.preventDefault();
    debugger;
   
    fetch(`http://localhost:5000/pages/${editPage._id}`, {
        
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(editPage)
     }).then(response => response.json())
     .then(data => {
         setdash(dash.map(user => {
             if (user._id === data._id) {
                 return data;
             }
             return user;
         }));
         setEditPage(data);
     });
};

const handleDelete = async (_id) => {
  
    debugger
    await fetch(`http://localhost:5000/pages/${_id}`, {
        method: "DELETE",

    })
    setdash(dash.filter((item) => item._id !== _id));
   
};
const history = useNavigate()
const handleAddRecord = () => {
   
    history("/addpage");
  };
    return (
        <div>
          <div className='mt-3'>
            <h1 style={{color:'#202A44',fontFamily:'Rockwell'}}><HiDocumentText/> Pages</h1>
          </div>
          <hr/>
          <div>
            <Button onClick={()=> handleAddRecord()}><BsPersonFillAdd/> Add Page</Button>
            </div>
          <br/>
         <div>
         <Table striped bordered hover size="md">
               <thead>
                <tr>
                  <th>Page Title</th>
                  <th>Category</th>
                  <th>Author</th>

                </tr>

               </thead>
               <tbody>
                
                  {
                    dash.map((item)=>(

                      <tr key={item._id}>
                        <td>{item.Pagetitle}</td>
                        <td>{item.Category}</td>
                        <td>{item.Author}</td>
                        <td>
                            <Button onClick={() => handleEditPage(item)}><CiEdit/>Edit</Button> |  <Button className='btn btn-danger' onClick={() => handleDelete(item._id)}><RxCross2/>Delete</Button> 
                        </td>
                      </tr>
                    ))
                  }
                
               </tbody>
             </Table>
         </div>
         <div>
            {editPage && (
                 <form  onSubmit={handleUpdatePage} className='frm-bg'>
                 <div class="form-group">
                   <label >Pagetitle:</label>
                   <input type="text" class="form-control" value={editPage.Pagetitle} onChange={e => setEditPage({ ...editPage, Pagetitle: e.target.value })} placeholder="Enter Pagetitle"></input>
                   </div>
                 <div class="form-group">
                   <label>Category:</label>
                   <input type="text" class="form-control" value={editPage.Category} onChange={e => setEditPage({ ...editPage, Category: e.target.value })} placeholder="Enter the Category "></input>
                 </div>
                 <div class="form-group">
                      <label>Author:</label>
                   <input type="text" class="form-control"  value={editPage.Author} onChange={e => setEditPage({ ...editPage, Author: e.target.value })} placeholder="Enter the Author"></input>
                 </div>
                 <br></br>
                 <button type="submit"  class="btn btn-primary">Submit</button>
               </form>
             )}
         </div>
         <br />

         <div>
         <Pagination>
<Pagination.First />
<Pagination.Item>{1}</Pagination.Item>
<Pagination.Item >{2}</Pagination.Item>
<Pagination.Item active>{3}</Pagination.Item>
<Pagination.Item >{4}</Pagination.Item>
<Pagination.Item>{5}</Pagination.Item>
<Pagination.Item>{6}</Pagination.Item>
<Pagination.Last />
</Pagination>
</div>
       
    </div>
           
    );
}
