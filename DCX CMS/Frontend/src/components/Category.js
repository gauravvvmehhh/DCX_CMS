import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

import Pagination from 'react-bootstrap/Pagination';
import { IoIosFolderOpen } from "react-icons/io";

export default function Category() {
  useEffect(()=>{
    result();
  },[]);
  const [cat,setcat]=useState([]);
const result=async ()=>{
  const data=await fetch('http://localhost:5000/cats');
  const result=await data.json();
  console.warn(result);
  setcat(result);
}
    return (
        <div>
          <div className='mt-5'>
            <h1 style={{color:'#000080',fontFamily:'Cordia New'}}><IoIosFolderOpen/> Categories</h1>
          </div>
          <hr/>
       
          <br/>
        
         <div>
         <Table striped bordered hover size="lg">
               <thead>
                <tr>
                
                  <th>Category Title</th>
                 
                </tr>

               </thead>
               <tbody>
                
                  {
                    cat.map((item)=>(

                      <tr key={item._id}>
                     
                        <td>{item.Category}</td>
                      
                      </tr>
                    ))
                  }
                
               </tbody>
             </Table>
         </div>
         <br/>

<div>
<Pagination>
<Pagination.First />
<Pagination.Item>{1}</Pagination.Item>
<Pagination.Item active>{2}</Pagination.Item>
<Pagination.Item>{3}</Pagination.Item>
<Pagination.Item >{4}</Pagination.Item>
<Pagination.Item>{5}</Pagination.Item>
<Pagination.Item>{6}</Pagination.Item>
<Pagination.Last />
</Pagination>
</div>
         
      
         
    </div>
           
    );
}


