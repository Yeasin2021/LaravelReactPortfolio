
import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import Music from '../sound/add1.wav';
import { Link } from 'react-router-dom';

const TestimonialView = () => {
const formStyleOne = {
    marginLeft: '300px',
    marginTop: '4%',
    }
    const [items,setItems] = useState();
    useEffect(()=>{
        const dataShow = async () =>{
            const data_response = await axios.get('testimonial')
            .then((result)=>setItems(result.data.testimonial));
        }
        dataShow();
        },[]);
  return (
        <div class="container">
            <div class="row" style={ formStyleOne }>
                <div class="col">
                    <div class="card">
                        <div class="card-body">
                            <table class="table">
                                <thead>
                                    <tr>
                                    <th scope="col">SN</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Profession</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>

                                        {
                                            items && items.map((item,index)=>{
                                                return(
                                                        <tr  key={index}>
                                                            <td scope="row">{++index}</td>
                                                            <td scope="row">{item.name}</td>
                                                            <td>{item.occupation}</td>
                                                            <td><p dangerouslySetInnerHTML={{ __html:item.description }}></p></td>
                                                            <td><img src={`back-end/img/testimonial/${item.image}`} /></td>
                                                            <td>
                                                                <Link to={`/admin-testimonial/${item.id}`}><i className="bi bi-pencil"></i></Link>
                                                                <Link to='#'><i className="bi bi-trash3"></i></Link>
                                                            </td>
                                                        </tr>
                                                )
                                            })
                                        }


                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default TestimonialView
