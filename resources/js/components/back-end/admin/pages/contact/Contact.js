import React, { useState,useRef,useEffect } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MusicEdit from '../sound/edit.wav';





const Contact = () => {

  const [items,setItems] = useState([]);

  useEffect(()=>{
    const dataShow = async () =>{
        const data_response = await axios.get('pricing')
        .then((result)=>setItems(result.data.pricingAll));
    }
    dataShow();
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
                    <th scope="col">Card Title</th>
                    <th scope="col">Card Course 1</th>
                    <th scope="col">Card Course 2</th>
                    <th scope="col">Card Course 3</th>
                    <th scope="col">Card Course 4</th>
                    <th scope="col">Card Course 5</th>
                    <th scope="col">Card Fee</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    items && items.map((item,i)=>{
                      return(
                        <tr className='headlineText'>
                          <th scope="row">{item.id}</th>
                          <td>{item.cardTitle}</td>
                          <td>{item.cardCourseOne}</td>
                          <td>{item.cardCourseTwo}</td>
                          <td>{item.cardCourseThree}</td>
                          <td>{item.cardCourseFour}</td>
                          <td>{item.cardCourseFive}</td>
                          <td>{item.cardFee}</td>
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
