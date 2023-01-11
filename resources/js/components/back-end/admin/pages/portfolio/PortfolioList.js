
import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import Music from '../sound/add1.wav';
import { Link } from 'react-router-dom';
import MusicEdit from '../sound/edit.wav';
import MusicDelete from '../sound/delete.wav';

const PortfolioList = () => {
const formStyleOne = {
    marginLeft: '300px',
    marginTop: '4%',
    }
    const [items,setItems] = useState();
    useEffect(()=>{
        const dataShow = async () =>{
            const data_response = await axios.get('portfolios')
            .then((result)=>setItems(result.data.portfolio));
        }
        dataShow();
        },[]);

        const editSound = () =>{
            const audioEdit = new Audio(MusicEdit);
            toast.info("Edit page open")
            audioEdit.play();
          }

        const deleteUser = async (id) =>{

            if(window.confirm("Delete this Item") == true){
                const audioDel = new Audio(MusicDelete);
                await axios.delete(`portfolios/${id}`);
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
        <div class="container">
        <div className="row"  style={ formStyleOne }>
                <div className="col">
                <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Portfolio Form Page</h5>
                    <Link to={'/admin-testimonial-form'}><button type="button" className="btn btn-primary">Add New</button></Link>
                </div>
                </div>
                </div>
            </div>

            <div class="row" style={ formStyleOne }>
                <div class="col">
                    <div class="card">
                        <div class="card-body">
                            <table class="table">
                                <thead>
                                    <tr>
                                    <th scope="col">SN</th>
                                    <th scope="col">Title One</th>
                                    <th scope="col">Title Two</th>
                                    <th scope="col">Link</th>
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
                                                            <td scope="row">{item.title_one}</td>
                                                            <td>{item.title_two}</td>
                                                            <td>{item.link}</td>
                                                            {/* <td><p dangerouslySetInnerHTML={{ __html:item.description }}></p></td> */}
                                                            <td><img src={`back-end/img/portfolio/${item.image}`} height="250px" width="250px"/></td>
                                                            <td>
                                                                <Link to={`/admin-portfolio/${item.id}`}><button className='btn btn-primary' onClick={editSound}><i className="bi bi-pencil"></i></button></Link>
                                                                <button onClick={()=> deleteUser(item.id)}  className='btn btn-danger ms-3'><i className="bi bi-trash3"></i></button>
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

export default PortfolioList
