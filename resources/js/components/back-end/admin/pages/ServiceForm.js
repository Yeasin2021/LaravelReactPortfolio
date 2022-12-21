import React, { useState,useRef } from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Music from './coin.mp3';




const ServiceForm = () => {
  const formStyleOne = {
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    margin: '25px 25px 25px 25px',
    position: 'relative'
  }


  const clearDataIcon = useRef();
  const clearDataTitle = useRef();
  const clearDataDescription = useRef();
  const [input,setInput] = useState(
    {
        icon : "",
        title: "",
        description: ""
    }
  )

  const onSubmit = async (event) =>{
    event.preventDefault();
    try{
      const response = await axios.post('service',input);
      clearDataIcon.current.value = '';
      clearDataTitle.current.value = '';
      clearDataDescription.current.value = '';
      //   console.log(response);
      if(response.data.status == 200){
        toast("Data Added Successfully 😲")
      }
    }catch(error){
      alert(error)
    }
  }

  const Sound = () =>{
    const audio = new Audio('./coin.mp3');
    audio.play();

  }

  const notify = () => toast("Wow so easy!");

  return (
    <div className='container' style={ formStyleOne }>
        <ToastContainer />
        <div className="row">
            <div className="col-sm">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputCardicon">Card-Icon</label>
                        <input type="text" className="form-control"
                        id='exampleInputCardicon'
                        placeholder="Enter Card icon"
                        name='card_icon'
                        onChange={(e)=> setInput({...input, [e.target.name]: e.target.value})}
                        ref={clearDataIcon}
                       />
                       {/* value={input.icon} only for edit page*/}
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputCardTitle">Card Title</label>
                        <input type="text" className="form-control"
                        id="exampleInputCardTitle" placeholder="Enter Card Title"
                        name='card_title'
                        onChange={(e)=> setInput({...input, [e.target.name]: e.target.value})}
                        ref={clearDataTitle}
                       />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputCardDes">Card Description</label>
                        <input type="text" className="form-control"
                        id="exampleInputCardDes"
                        placeholder="Enter Card Title"
                        name='card_description'
                        onChange={(e)=> setInput({...input, [e.target.name]: e.target.value})}
                        ref={clearDataDescription}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ marginTop:"10px" }}>Submit</button>
                </form>
            </div>


        </div>
    </div>
  )
}

export default ServiceForm
