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
    //     const navigate = useNavigate();

    //     const [slider_image,setImage] = useState(null);
    //     const imageHandaler = (e) =>{
    //         console.log(e.target.files);
    //         setImage(e.target.files[0]);
    //     }

    //   const audio = new Audio(Music);
    //   const updateUser = async (e) =>{
    //     e.preventDefault();
    //     const formData = new FormData();
    //     formData.append('slider_image',slider_image);
    //     await axios.put(`/slider/${id}`,formData);

    //     // await axios.put(`/slider/${id}`,formData);
    //     toast("Data Updated Successfully 😲")
    //     audio.play();
    //     navigate("/admin-slider");
    // }

    const [title,setTitle] = useState('');
    const [header,setHeader] = useState('');
    const [image,setImage] = useState('');
    const imageHandaler = (e) =>{
        console.log(e.target.files);
        setImage(e.target.files[0]);
    }
    const submitForm = async (e) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('slider_title',title);
        formData.append('slider_header',header);
        formData.append('image',image);
        console.log(formData)
        await axios.post(`/slider-update/${id}`,formData);
        toast("Data Updated Successfully 😲");
        audio.play();
        navigate("/admin-slider");
    }


    return (
        <div className="container">
            <ToastContainer />
            <div className="row" style={ formStyleOne }>
              <div className="col-md-8">
                <form onSubmit={submitForm} encType="multipart/form-data">
                    <div class="form-group">
                        <label for="exampleInputAge">Slider Title</label>
                        <input type="text" name="slider_title" onChange={(e)=>setTitle(e.target.value)} />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputAge">Slider Header</label>
                        <input type="text" name="slider_header" onChange={(e)=>setHeader(e.target.value)}/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputAge">Slider Image</label>
                        <input type="file" name="image" className="mb-4" onChange={imageHandaler}/>
                    </div>


                    <button type="submit" className="btn btn-primary mt-2">Submit</button>
                  </form>
              </div>

            </div>
          </div>
      )







    //   return (
    //     <div>

    //         <form onSubmit={submitForm} style={ formStyleOne } encType="multipart/form-data">
    //             <input type="file" name="image" onChange={imageHandaler}/>
    //             {console.log(image)}
    //             <button type='submit'>Submit</button>
    //         </form>

    //     </div>
    //   )
}

export default SliderEdit
