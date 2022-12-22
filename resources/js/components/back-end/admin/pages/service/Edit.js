import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Edit = () => {
    const formStyleOne = {
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
        margin: '25px 25px 25px 280px',
        position: 'relative'
      }

    const {id} = useParams();
    const navigate = useNavigate();
    const [input, setInput] = useState(
        {
            icon : "",
            title: "",
            description: ""
        }
        );

        useEffect(()=>{
            try{

                const getSingleRecord = async () =>{
                const response = await axios.get(`/service/${id}/edit`);
                console.log(response.data.service)
                setInput(response.data.service);
              };

              getSingleRecord();

            }catch(error){
              console.log(error);
            }
        },[id]);

        const updateUser = async (e) =>{
            e.preventDefault();
            await axios.put(`/service/${id}`,input);
            toast.info("Data Updated !!");
            navigate("/dashboard");
        }

  return (
    <div class="container" style={ formStyleOne }>
        <ToastContainer/>
        <div class="row">
          <div class="col-md-12">
            <form onSubmit={updateUser}>
                <div class="form-group">
                  <label for="exampleInputPhone">Icon</label>
                  <input type="text" class="form-control" name="card_icon" onChange={(e)=> setInput({...input, [e.target.name]: e.target.value})} value={input.card_icon} />
                </div>
                <div class="form-group">
                  <label for="exampleInputPhone">Title</label>
                  <input type="text" class="form-control" name="card_title" onChange={(e)=> setInput({...input, [e.target.name]: e.target.value})} value={input.card_title} />
                </div>
                <div class="form-group">
                  <label for="exampleInputPhone">Description</label>
                  <input type="text" class="form-control" name="card_description" onChange={(e)=> setInput({...input, [e.target.name]: e.target.value})} value={input.card_description} />
                </div>
                <button type="submit" class="btn btn-primary mt-2">Submit</button>
              </form>
          </div>
        </div>
      </div>
  )
}

export default Edit
