import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Music from '../update.wav'

const PricingEdit = () => {
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
            cardTitle : "",
            cardCourseOne: "",
            cardCourseTwo: "",
            cardCourseThree: "",
            cardCourseFour: "",
            cardCourseFive: "",
            cardFee: ""
        }
        );

        useEffect(()=>{
            try{

                const getSingleRecord = async () =>{
                const response = await axios.get(`/pricing/${id}/edit`);
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
            await axios.put(`/pricing/${id}`,input);
            toast("Data Updated Successfully 😲")
            audio.play();
            navigate("/dashboard");
        }

  return (
    <div class="container" style={ formStyleOne }>
        <ToastContainer/>
        <div class="row">
          <div class="col-md-12">
            <form onSubmit={updateUser}>
                <div class="form-group">
                  <label for="exampleInputPhone">Card Title</label>
                  <input type="text" id='exampleInputPhone' class="form-control" name="cardTitle" onChange={(e)=> setInput({...input, [e.target.name]: e.target.value})} value={input.cardTitle} />
                </div>
                <div class="form-group">
                  <label for="exampleInputPhone">Course 1</label>
                  <input type="text" id='exampleInputPhone' class="form-control" name="cardCourseOne" onChange={(e)=> setInput({...input, [e.target.name]: e.target.value})} value={input.cardCourseOne} />
                </div>
                <div class="form-group">
                  <label for="exampleInputPhone">Course 2</label>
                  <input type="text" id='exampleInputPhone' class="form-control" name="cardCourseTwo" onChange={(e)=> setInput({...input, [e.target.name]: e.target.value})} value={input.cardCourseTwo} />
                </div>
                <div class="form-group">
                  <label for="exampleInputPhone">Course 3</label>
                  <input type="text" id='exampleInputPhone' class="form-control" name="cardCourseThree" onChange={(e)=> setInput({...input, [e.target.name]: e.target.value})} value={input.cardCourseThree} />
                </div>
                <div class="form-group">
                  <label for="exampleInputPhone">Course 4</label>
                  <input type="text" id='exampleInputPhone' class="form-control" name="cardCourseFour" onChange={(e)=> setInput({...input, [e.target.name]: e.target.value})} value={input.cardCourseFour} />
                </div>
                <div class="form-group">
                  <label for="exampleInputPhone">Course 5</label>
                  <input type="text" id='exampleInputPhone' class="form-control" name="cardCourseFive" onChange={(e)=> setInput({...input, [e.target.name]: e.target.value})} value={input.cardCourseFive} />
                </div>
                <div class="form-group">
                  <label for="exampleInputPhone">Card Fee</label>
                  <input type="text" id='exampleInputPhone' class="form-control" name="cardFee" onChange={(e)=> setInput({...input, [e.target.name]: e.target.value})} value={input.cardFee} />
                </div>
                <button type="submit" class="btn btn-primary mt-2">Submit</button>
                <Link to="/dashboard"><button type="submit" class="btn btn-success mt-2" style={{ marginLeft:'10px' }}>Back</button></Link>
              </form>
          </div>

        </div>
      </div>
  )
}

export default PricingEdit
