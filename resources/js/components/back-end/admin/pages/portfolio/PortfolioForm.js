
import React,{useState,useEffect} from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import Music from '../sound/add1.wav';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


const PortfolioForm = () => {
    const formStyleOne = {
        marginLeft: '300px',
        marginTop: '4%',
        }

    const navigate = useNavigate();
    const [file,setFile] = useState();
    const [image,setImage] = useState();
    const imagePreviewFunction = (e) =>{
        setFile(URL.createObjectURL(e.target.files[0]));
        setImage(e.target.files[0]);
    }


    const [titleOne,setTitleOne] = useState();
    const [titleTwo,setTitleTwo] = useState();
    const [link,setLink] = useState();
    const [type,setType] = useState();

    const onSubmitForm = async(e) =>{
        e.preventDefault();
        try{
            const audio = new Audio(Music);
            const formData = new FormData();
            formData.append('title_one',titleOne);
            formData.append('title_two',titleTwo);
            formData.append('link',link);
            formData.append('type',type);
            formData.append('image',image);
            await axios.post('portfolios',formData);
            toast.success("Data added Successfully 😲 ")
            audio.play();
            navigate("/admin-portfolio-list");
        }catch(error){
            console.log(error.message);
        }

    }

      return (
        <div>
            <div className="container">

                <div className="row" style={ formStyleOne }>
                <ToastContainer />
                    <form onSubmit={onSubmitForm} encType="multipart/form-data">
                        <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="exampleInputName">Title One</label>
                                        <input type="text" className="form-control" id="exampleInputName"  name='title_one' onChange={(e)=>setTitleOne(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputJob">Title Two</label>
                                        <input type="text" className="form-control" id="exampleInputJob"  name='title_two' onChange={(e)=>setTitleTwo(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputJob">Link</label>
                                        <input type="text" className="form-control" id="exampleInputJob"  name='link' onChange={(e)=>setLink(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputJob">Project Type</label>
                                        <div>
                                            <input type="radio" value="filter-app"   name='type' onChange={(e)=>setType(e.target.value)} />App
                                            <input type="radio" value="filter-card"   name='type' onChange={(e)=>setType(e.target.value)} style={{ marginLeft:'10px' }}/>Card
                                            <input type="radio" value="filter-web"    name='type' onChange={(e)=>setType(e.target.value)} style={{ marginLeft:'10px' }}/>Web
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="exampleInputImage">Image</label>
                                        <input type="file" className="form-control" id="exampleInputImage"  name="image" onChange={imagePreviewFunction}/>
                                        <img src={file} className="mt-1"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        {/* <div className="form-check"></div> */}
                        <button type="submit" className="btn btn-primary mt-2">Submit</button>
                        <div className="mt-2"></div>
                    </form>
                </div>
            </div>
        </div>
      )
}

export default PortfolioForm
