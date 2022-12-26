import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Music from '../update.wav'

const EditContact = () => {
    const formStyleOne = {
        // justifyContent: 'center',
        // display: 'flex',
        // alignItems: 'center',
        // margin: '25px 25px 25px 380px',
        position: 'relative',
        width:"763px"

      }

    const {id} = useParams();
    const navigate = useNavigate();
    const audio = new Audio(Music);
    const [input, setInput] = useState(
        {
            title : "",
            contactEmail: "",
            contactPhone: "",
            icon_one: "",
            icon_two: "",
            icon_three: "",
            icon_four: "",
            icon_five: ""
        }
        );

        useEffect(()=>{
            try{

                const getSingleRecord = async () =>{
                const response = await axios.get(`/contact/${id}/edit`);
                console.log(response.data.edit)
                setInput(response.data.edit);
              };

              getSingleRecord();

            }catch(error){
              console.log(error);
            }
        },[id]);

        const updateUser = async (e) =>{
            e.preventDefault();
            await axios.put(`/contact/${id}`,input);
            toast("Data Updated Successfully 😲")
            audio.play();
            navigate("/contacts");
        }

  return (
    <div class="container" style={ formStyleOne }>
        <ToastContainer/>
        <div class="row">
          <div class="col-md-12">
            <form onSubmit={updateUser}>
                <div class="form-group">
                  <label for="exampleInputPhone">Card Title</label>
                  <input type="text" id='exampleInputPhone' class="form-control" name="title" onChange={(e)=> setInput({...input, [e.target.name]: e.target.value})} value={input.title} />
                </div>
                <div class="form-group">
                  <label for="exampleInputPhone">Course 1</label>
                  <input type="text" id='exampleInputPhone' class="form-control" name="contactEmail" onChange={(e)=> setInput({...input, [e.target.name]: e.target.value})} value={input.contactEmail} />
                </div>
                <div class="form-group">
                  <label for="exampleInputPhone">Course 2</label>
                  <input type="text" id='exampleInputPhone' class="form-control" name="contactPhone" onChange={(e)=> setInput({...input, [e.target.name]: e.target.value})} value={input.contactPhone} />
                </div>
                <div class="form-group">
                  <label for="exampleInputPhone">Course 3</label>
                  <input type="text" id='exampleInputPhone' class="form-control" name="icon_one" onChange={(e)=> setInput({...input, [e.target.name]: e.target.value})} value={input.icon_one} />
                </div>
                <div class="form-group">
                  <label for="exampleInputPhone">Course 4</label>
                  <input type="text" id='exampleInputPhone' class="form-control" name="icon_two" onChange={(e)=> setInput({...input, [e.target.name]: e.target.value})} value={input.icon_two} />
                </div>
                <div class="form-group">
                  <label for="exampleInputPhone">Course 5</label>
                  <input type="text" id='exampleInputPhone' class="form-control" name="icon_three" onChange={(e)=> setInput({...input, [e.target.name]: e.target.value})} value={input.icon_three} />
                </div>
                <div class="form-group">
                  <label for="exampleInputPhone">Card Fee</label>
                  <input type="text" id='exampleInputPhone' class="form-control" name="icon_four" onChange={(e)=> setInput({...input, [e.target.name]: e.target.value})} value={input.icon_four} />
                </div>
                <div class="form-group">
                  <label for="exampleInputPhone">Card Fee</label>
                  <input type="text" id='exampleInputPhone' class="form-control" name="icon_five" onChange={(e)=> setInput({...input, [e.target.name]: e.target.value})} value={input.icon_five} />
                </div>
                <button type="submit" class="btn btn-primary mt-2">Submit</button>
                <Link to="/contacts"><button type="submit" class="btn btn-success mt-2" style={{ marginLeft:'10px' }}>Back</button></Link>
              </form>
          </div>

        </div>
      </div>
  )
}

export default EditContact
