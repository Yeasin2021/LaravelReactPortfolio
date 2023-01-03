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


      const [image,setImage] = useState('');
      const [title,setTitle] = useState('');
      const [header,setHeader] = useState('');
      const [input,setInput] = useState(
       {
        'slider_title': '',
        'slider_header':'',

       }
      );

        const imageHandaler = (e) =>{
            console.log(e.target.files);
            setImage(e.target.files[0]);
        }


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
        const formData = new FormData();
        // formData.append('slider_title',title);
        // formData.append('slider_header',header);
        formData.append('slider_image',image);
        await axios.put(`/slider/${id}`,formData);
        // await axios.put(`/slider/${id}`,formData);
        toast("Data Updated Successfully 😲")
        audio.play();
        navigate("/admin-slider");
    }



    return (
        <div className="container">
            <ToastContainer />
            <div className="row" style={ formStyleOne }>
              <div className="col-md-8">
                <form onSubmit={updateUser} encType="multipart/form-data">
                    {/* <div className="form-group">
                      <label for="exampleInputPhone">Slider Title</label>
                      <input type="text" className="form-control" name="title" onChange={(e)=> setTitle(e.target.value)}  ref={sliderTitle} />
                    </div> */}
                    {/* <div class="form-group">
                      <label for="exampleInputAge">Slider Header</label>
                      <input type="text" className="form-control" name="header" onChange={(e)=> setHeader(e.target.value)} ref={sliderHeader} />
                    </div> */}
                    <div class="form-group">
                      <label for="exampleInputAge">Slider Image</label>
                      {/* <input type="file" className="form-control" name="slider_image" onChange={(e)=>setPhoto(e.target.files[0])} ref={sliderImage}/> */}
                      <input type="file" name="slider_image" className="mb-4" onChange={imageHandaler}/>
                      {console.log(image)}
                    </div>

                    <button type="submit" className="btn btn-primary mt-2">Submit</button>
                  </form>
              </div>

            </div>
          </div>
      )
}

export default SliderEdit
