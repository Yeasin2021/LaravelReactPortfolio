import React, { useState,useRef,useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Music from '../sound/add1.wav';
import MusicEdit from '../sound/edit.wav';

const SliderAdd = () => {

const formStyleOne = {
    marginLeft: '220px',
    marginTop: '4%',
    }


const [image,setImage] = useState('');
const imageHandaler = (e) =>{
    console.log(e.target.files);
    setImage(e.target.files[0]);
}
const submitForm = async (e) =>{
    e.preventDefault();
    const formData = new FormData();
    formData.append('slider_image',image);
    console.log(formData)
    await axios.post('slider',formData);
    toast("Data added Successfully 😲");
    audio.play();
    navigate("/admin-slider-add");
}
  return (
    <div>

        <form onSubmit={submitForm} style={ formStyleOne } encType="multipart/form-data">
            <input type="file" name="slider_image" onChange={imageHandaler}/>
            {console.log(image)}
            <button type='submit'>Submit</button>
        </form>

    </div>
  )
}

export default SliderAdd
