import React, { useState,useRef,useEffect } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Music from '../sound/add1.wav';
import MusicEdit from '../sound/edit.wav';
import MusicDelete from '../sound/delete.wav';




const Pricing = () => {
  const formStyleOne = {
    // marginLeft: '10%',
    marginLeft: '220px',
    marginTop: '4%',
  }



  const clearTitle= useRef();
  const clearOne= useRef();
  const clearTwo = useRef();
  const clearThree = useRef();
  const clearFour = useRef();
  const clearFive = useRef();
  const clearFee = useRef();
  const [items,setItems] = useState([]);
  const [render,setRender] = useState(false);

  const [input,setInput] = useState(
    {
        cardTitle : "",
        cardCourseOne: "",
        cardCourseTwo: "",
        cardCourseThree: "",
        cardCourseFour: "",
        cardCourseFive: "",
        cardFee: ""
    }
  )

  const audio = new Audio(Music);

  const onSubmit = async (event) =>{
    event.preventDefault();
    try{
      const response = await axios.post('pricing',input);
      clearTitle.current.value = '';
      clearOne.current.value = '';
      clearTwo.current.value = '';
      clearThree.current.value = '';
      clearFour.current.value = '';
      clearFive.current.value = '';
      clearFee.current.value = '';
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
        const data_response = await axios.get('pricing')
        .then((result)=>setItems(result.data.pricingAll));
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
        await axios.delete(`pricing/${id}`);
        const newItems = items.filter((item)=>{
        return item.id !== id;
        });
        toast.warning("Data Deleted Successfully");
        audioDel.play();
        setItems(newItems);
    }else{
        toast.success("Data not Deleted from this Record");
    }

  }

return (
    <div className="container">
        <ToastContainer />
        <div className="row" style={ formStyleOne }>
          <div className="col-md-4">
            <form onSubmit={onSubmit} >
                <div className="form-group">
                  <label for="exampleInputPhone">Card Title</label>
                  <input type="text" className="form-control" name="cardTitle" onChange={(e)=> setInput({...input, [e.target.name]: e.target.value})}  ref={clearTitle}  />
                </div>
                <div class="form-group">
                  <label for="exampleInputAge">Card Course One</label>
                  <input type="text" className="form-control" name="cardCourseOne" onChange={(e)=> setInput({...input, [e.target.name]: e.target.value})} ref={clearOne} />
                </div>
                <div class="form-group">
                  <label for="exampleInputAge">Card Course Two</label>
                  <input type="text" className="form-control" name="cardCourseTwo" onChange={(e)=> setInput({...input, [e.target.name]: e.target.value})} ref={clearTwo}/>
                </div>
                <div class="form-group">
                  <label for="exampleInputAge">Card Course Three</label>
                  <input type="text" className="form-control" name="cardCourseThree" onChange={(e)=> setInput({...input, [e.target.name]: e.target.value})} ref={clearThree}/>
                </div>
                <div class="form-group">
                  <label for="exampleInputAge">Card Course Four</label>
                  <input type="text" className="form-control" name="cardCourseFour" onChange={(e)=> setInput({...input, [e.target.name]: e.target.value})} ref={clearFour}/>
                </div>
                <div class="form-group">
                  <label for="exampleInputAge">Card Course Five</label>
                  <input type="text" className="form-control" name="cardCourseFive" onChange={(e)=> setInput({...input, [e.target.name]: e.target.value})} ref={clearFive}/>
                </div>
                <div class="form-group">
                  <label for="exampleInputAge">Card Fee</label>
                  <input type="text" className="form-control" name="cardFee" onChange={(e)=> setInput({...input, [e.target.name]: e.target.value})} ref={clearFee}/>
                </div>
                <button type="submit" className="btn btn-primary mt-2">Submit</button>
              </form>
          </div>

          <div className="col-md-8">

          <input type="text" /*onChange={Search}*/ className="form-control" placeholder='Search by Name'/>
            <table class="table table-bordered text-black mt-3">
                <thead>
                  <tr className='headlineText'>
                    <th scope="col">ID</th>
                    <th scope="col">Card Title</th>
                    <th scope="col">Card Course 1</th>
                    <th scope="col">Card Course 2</th>
                    <th scope="col">Card Course 3</th>
                    <th scope="col">Card Course 4</th>
                    <th scope="col">Card Course 5</th>
                    <th scope="col">Card Fee</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    items && items.map((item,i)=>{
                      return(
                        <tr className='headlineText'>
                          <th scope="row">{item.id}</th>
                          <td>{item.cardTitle}</td>
                          <td>{item.cardCourseOne}</td>
                          <td>{item.cardCourseTwo}</td>
                          <td>{item.cardCourseThree}</td>
                          <td>{item.cardCourseFour}</td>
                          <td>{item.cardCourseFive}</td>
                          <td>{item.cardFee}</td>
                          <td className='d-flex'>
                            <Link to={`/price/${item.id}`}>
                              <button className='btn btn-primary' onClick={editSound}>E</button>
                            </Link>

                              <button onClick={()=> deleteUser(item.id)}  className='btn btn-danger ms-3'>D</button>

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

export default Pricing
