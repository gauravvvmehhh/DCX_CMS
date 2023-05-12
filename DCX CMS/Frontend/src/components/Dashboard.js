import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { GoDashboard } from "react-icons/go";



export default function Dashboard() {
  useEffect(()=>{
    result();
  },[]);
  const [dash,setdash]=useState([]);
const result=async ()=>{
  const data=await fetch('http://localhost:5000/pages');
  const result=await data.json();
  setdash(result);
}
    return (
        <div>
          <div className='mt-3'>
            <h1 style={{color:'#0079BF',fontFamily:'Cordia New'}}><GoDashboard/> Dashboard</h1>
          </div>
          <hr/>
          <div>
            <h2 style={{color:'#2C499E',fontFamily:'Cordia New'}}>Latest Pages</h2>
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
                      </tr>
                    ))
                  }
                
               </tbody>
             </Table>
         </div>
         <div>
          <br/>
          <hr/>
          <button type='submit' style={{color:'#001747' , borderRadius:"7px"}} >View All Pages</button>
        </div><br/>
        
    </div>
           
    );
}
