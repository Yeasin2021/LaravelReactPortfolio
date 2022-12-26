import React, { useState,useRef,useEffect } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MusicEdit from '../sound/edit.wav';





const Contact = () => {

  const [items,setItems] = useState([]);

  useEffect(()=>{
    try{
        const dataShow = async () =>{
            const data_response = await axios.get('contact')
            .then((result)=>setItems(result.data.contact));
            // console.log(data_response.contact)

        }
        dataShow();
    }catch(error){
        console.log(error)
    }
  },[]);


  const editSound = () =>{
    const audioEdit = new Audio(MusicEdit);
    toast.info("Edit page open")
    audioEdit.play();
  }



return (
    <div className="container">
        <ToastContainer />
        <div className="row" style={{marginLeft:"20%",marginTop:"5%" }}>

          <div className="col-md-12">


            <table class="table table-bordered text-black mt-3">
                <thead>
                  <tr className='headlineText'>
                    <th scope="col">ID</th>
                    <th scope="col">Title</th>
                    <th scope="col">Contact Email</th>
                    <th scope="col">Contact Phone</th>
                    <th scope="col">Icon One</th>
                    <th scope="col">Icon Two</th>
                    <th scope="col">Icon Three</th>
                    <th scope="col">Icon Four</th>
                    <th scope="col">Icon Five</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    items && items.map((item,i)=>{
                      return(
                        <tr className='headlineText'>
                          <th scope="row">{item.id}</th>
                          <td>{item.title}</td>
                          <td>{item.contactEmail}</td>
                          <td>{item.contactPhone}</td>
                          <td>{item.icon_one}</td>
                          <td>{item.icon_two}</td>
                          <td>{item.icon_three}</td>
                          <td>{item.icon_four}</td>
                          <td>{item.icon_five}</td>
                          <td className='d-flex'>
                            <Link to={`/contact/${item.id}`}>
                              <button className='btn btn-primary' onClick={editSound}>E</button>
                            </Link>

                              <button onClick={()=> deleteUser(item.id)}  className='btn btn-danger ms-3'>D</button>

                          </td>

                        </tr>
                      )
                    })
                  }
                  {/* <Pagination /> */}
                </tbody>
            </table>
          </div>

        </div>
      </div>
  )



}

export default Contact
