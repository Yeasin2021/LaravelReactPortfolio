import React, { useState,useRef,useEffect } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Music from '../sound/add1.wav';
import MusicEdit from '../sound/edit.wav';


const Slider = () => {
    const formStyleOne = {
        marginLeft: '220px',
        marginTop: '4%',
      }



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

      const onSubmit = async (event) =>{
        event.preventDefault();
        try{
          const response = await axios.post('slider',input);
          sliderTitle.current.value = '';
          sliderHeader.current.value = '';
          sliderImage.current.value = '';
          if(response.data.status == 200){
            audio.play();
            toast("Data Added Successfully 😲")
          }
        }catch(error){
          alert(error)
        }
      }


      useEffect(()=>{
        const dataShow = async () =>{
            const data_response = await axios.get('slider')
            .then((result)=>setItems(result.data.slider));
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
            <div className="row" style={ formStyleOne }>
              {/* <div className="col-md-4">
                <form onSubmit={onSubmit} >
                    <div className="form-group">
                      <label for="exampleInputPhone">Card Title</label>
                      <input type="text" className="form-control" name="slider_title" onChange={(e)=> setInput({...input, [e.target.name]: e.target.value})}  ref={sliderTitle}  />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputAge">Card Course One</label>
                      <input type="text" className="form-control" name="slider_header" onChange={(e)=> setInput({...input, [e.target.name]: e.target.value})} ref={sliderHeader} />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputAge">Card Course Two</label>
                      <input type="file" className="form-control" name="slider_image" onChange={(e)=> setInput({...input, [e.target.name]: e.target.value})} ref={sliderImage}/>
                    </div>

                    <button type="submit" className="btn btn-primary mt-2">Submit</button>
                  </form>
              </div> */}

              <div className="col-md-8">
                <table class="table table-bordered text-black mt-3">
                    <thead>
                      <tr className='headlineText'>
                        <th scope="col">ID</th>
                        <th scope="col">Slider Title</th>
                        <th scope="col">Slider Header</th>
                        <th scope="col">Slider Image</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        items && items.map((item,i)=>{
                          return(
                            <tr className='headlineText'>
                              <th scope="row">{item.id}</th>
                              <td>{item.slider_title}</td>
                              <td>{item.slider_header}</td>
                              <td>{item.slider_image}</td>
                              <td className='d-flex'>
                                <Link to={`/admin-slider/${item.id}`}>
                                  <button className='btn btn-primary' onClick={editSound}>E</button>
                                </Link>

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

export default Slider
