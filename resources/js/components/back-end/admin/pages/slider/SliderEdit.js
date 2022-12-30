import React, { useState,useRef,useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Music from '../sound/add1.wav';
import MusicEdit from '../sound/edit.wav';


const SliderEdit = () => {
    const formStyleOne = {
        marginLeft: '220px',
        marginTop: '4%',
      }


      const {id} = useParams();
      const navigate = useNavigate();
      const sliderTitle= useRef();
      const sliderHeader= useRef();
      const sliderImage = useRef();
      const [items,setItems] = useState([]);

      const [input,setInput] = useState(
        {
            slider_title : "",
            slider_header: "",
            slider_image: ""
        }
      )

      const audio = new Audio(Music);

      useEffect(()=>{
        try{

            const getSingleRecord = async () =>{
            const response = await axios.get(`/slider/${id}/edit`);
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
        await axios.put(`/slider/${id}`,input);
        toast("Data Updated Successfully 😲")
        audio.play();
        navigate("/admin-slider");
    }



    return (
        <div className="container">
            <ToastContainer />
            <div className="row" style={ formStyleOne }>
              <div className="col-md-8">
                <form onSubmit={updateUser} >
                    <div className="form-group">
                      <label for="exampleInputPhone">Slider Title</label>
                      <input type="text" className="form-control" name="slider_title" onChange={(e)=> setInput({...input, [e.target.name]: e.target.value})}  ref={sliderTitle}  value={input.slider_title}/>
                    </div>
                    <div class="form-group">
                      <label for="exampleInputAge">Slider Header</label>
                      <input type="text" className="form-control" name="slider_header" onChange={(e)=> setInput({...input, [e.target.name]: e.target.value})} ref={sliderHeader} value={input.slider_header}/>
                    </div>
                    {/* <div class="form-group">
                      <label for="exampleInputAge">Slider Image</label>
                      <input type="file" className="form-control" name="slider_image" onChange={(e)=> setInput({...input, [e.target.name]: e.target.files[0]})} ref={sliderImage} value={input.slider_image}/>
                    </div> */}

                    <button type="submit" className="btn btn-primary mt-2">Submit</button>
                  </form>
              </div>

            </div>
          </div>
      )
}

export default SliderEdit
