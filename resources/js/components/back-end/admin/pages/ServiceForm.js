import React, { useState,useRef,useEffect } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Music from './coin.mp3';




const ServiceForm = () => {
  const formStyleOne = {
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    margin: '25px 25px 25px 350px',
    position: 'relative'
  }



  const clearDataIcon = useRef();
  const clearDataTitle = useRef();
  const clearDataDescription = useRef();
  const [items,setItems] = useState([]);
  const [render,setRender] = useState(false);

  const [input,setInput] = useState(
    {
        icon : "",
        title: "",
        description: ""
    }
  )

  const audio = new Audio(Music);

  const onSubmit = async (event) =>{
    event.preventDefault();
    try{
      const response = await axios.post('service',input);
      clearDataIcon.current.value = '';
      clearDataTitle.current.value = '';
      clearDataDescription.current.value = '';
      //   console.log(response);
      if(response.data.status == 200){
        audio.play();
        toast("Data Added Successfully 😲")
        setRender(true);
      }
    }catch(error){
      alert(error)
    }
  }


  useEffect(()=>{
    const dataShow = async () =>{
        const data_response = await axios.get('service')
        .then((result)=>setItems(result.data.services));
    }
    dataShow();
  },[render]);

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

        <div className="row">
                <div className="col-sm"></div>
                <div className="col-md-8">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                {/* <th scope="col">Serial No.</th> */}
                                <th scope="col">Service Id.</th>
                                <th scope="col">Card Icon</th>
                                <th scope="col">Card Title</th>
                                <th scope="col">Card Description</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            items.map((item,i)=>{
                            return(
                                <tr className='headlineText' key={i}>
                                {/* <th scope="row">{++i}</th> */}
                                <th scope="row">{item.id}</th>
                                <td>{item.card_icon}</td>
                                <td>{item.card_title}</td>
                                <td>{item.card_description}</td>
                                <td>
                                    <Link to={`/service/${item.id}`}>
                                        <button className='btn btn-primary mr-2'>E</button>
                                    </Link>

                                       <button onClick={()=> {deleteUser(item.id);}} className='btn btn-danger'>D</button>

                                </td>

                                </tr>
                            )
                            })
                        }

                        </tbody>
                    </table>
                </div>
                <div className="col-sm"></div>
        </div>

    </div>
  )
}

export default ServiceForm
