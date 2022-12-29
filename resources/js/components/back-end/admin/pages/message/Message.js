import React, { useState,useRef,useEffect } from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MusicDelete from '../sound/delete.wav';





const Message = () => {

  const {id} = useParams();
  const [items,setItems] = useState([]);

  useEffect(()=>{
    try{
        const dataShow = async () =>{
            const data_response = await axios.get('message')
            .then((result)=>setItems(result.data.message));
            // console.log(data_response.contact)

        }
        dataShow();
    }catch(error){
        console.log(error)
    }
  },[]);

  const deleteUser = async (id) =>{

    if(window.confirm("Delete this Item") == true){
        const audioDel = new Audio(MusicDelete);
        await axios.delete(`message/${id}`);
        const newItems = items.filter((item)=>{
        return item.id !== id;
        });
        toast.warning("Data Deleted Successfully");
        audioDel.play();
        setItems(newItems);
    }else{
        toast.success("Data not Deleted from this Record");
    }

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
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Contact Phone</th>
                    <th scope="col">Message</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    items && items.map((item,i)=>{
                      return(
                        <tr className='headlineText'>
                          <th scope="row">{item.id}</th>
                          <td>{item.name}</td>
                          <td>{item.email}</td>
                          <td>{item.phone}</td>
                          <td>{item.message}</td>
                          <td className='d-flex'>

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

export default Message
