import React, { useState,useRef,useEffect } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Music from './coin.mp3';
import Music from './add1.wav';
import MusicEdit from './edit.wav';
import MusicDelete from './delete.wav';




const ServiceForm = () => {
  const formStyleOne = {
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    margin: '25px 25px 25px 280px',
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


  const editSound = () =>{
    const audioEdit = new Audio(MusicEdit);
    toast.info("Edit page open")
    audioEdit.play();
  }


  const deleteUser = async (id) =>{

    if(window.confirm("Delete this Item") == true){
        const audioDel = new Audio(MusicDelete);
        await axios.delete(`service/${id}`);
        const newItems = items.filter((item)=>{
        return item.id !== id;
        });
        toast.warning("Data Deleted Successfully");
        audioDel.play();
        setItems(newItems);
    }else{
        console.log("no item deleted ");
    }

  }

return (
    <div className="container" style={ formStyleOne }>
        <ToastContainer />
        <div className="row">
          <div className="col-md-4">
            <form onSubmit={onSubmit} >
                <div className="form-group">
                  <label for="exampleInputPhone">Card Icon</label>
                  <input type="text" className="form-control" name="card_icon" onChange={(e)=> setInput({...input, [e.target.name]: e.target.value})}  ref={clearDataIcon}  />
                </div>
                <div class="form-group">
                  <label for="exampleInputAge">Card Title</label>
                  <input type="text" className="form-control" name="card_title" onChange={(e)=> setInput({...input, [e.target.name]: e.target.value})} ref={clearDataTitle} />
                </div>
                <div class="form-group">
                  <label for="exampleInputAge">Card Description</label>
                  <input type="text" className="form-control" name="card_description" onChange={(e)=> setInput({...input, [e.target.name]: e.target.value})} ref={clearDataDescription}/>
                </div>
                <button type="submit" className="btn btn-primary mt-2">Submit</button>
              </form>
          </div>

          <div className="col-md-6">

          <input type="text" /*onChange={Search}*/ className="form-control" placeholder='Search by Name'/>
            <table class="table table-bordered table-dark mt-3">
                <thead>
                  <tr className='headlineText'>
                    <th scope="col">ID</th>
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
                        <tr className='headlineText'>
                          <th scope="row">{item.id}</th>
                          <td>{item.card_icon}</td>
                          <td>{item.card_icon}</td>
                          <td>{item.card_description}</td>
                          <td>
                            <Link to={`/service/${item.id}`}>
                              <button className='btn btn-primary mr-2' onClick={editSound}>E</button>
                            </Link>

                              <button onClick={()=> deleteUser(item.id)} className='btn btn-danger'>D</button>

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

export default ServiceForm
