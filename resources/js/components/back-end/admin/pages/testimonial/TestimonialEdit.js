
import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Music from '../sound/add1.wav';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const TestimonialEdit = () => {
    const formStyleOne = {
        marginLeft: '300px',
        marginTop: '4%',
        }


    const {id} = useParams();
    const [file,setFile] = useState();
    const [image,setImage] = useState();
    const imagePreviewFunction = (e) =>{
        setFile(URL.createObjectURL(e.target.files[0]));
        setImage(e.target.files[0]);
    }


    const [name,setName] = useState();
    const [job,setJob] = useState();
    const [description,setDescription] = useState();

    const onSubmitForm = async(e) =>{
        e.preventDefault();
        try{
            const audio = new Audio(Music);
            const formData = new FormData();
            formData.append('name',name);
            formData.append('job',job);
            formData.append('description',description);
            formData.append('image',image);
            await axios.post(`testimonial/${id}`,formData);
            toast.success("Data Updated Successfully 😲 ")
            audio.play();
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
                                        <label htmlFor="exampleInputName">Name</label>
                                        <input type="text" className="form-control" id="exampleInputName"  name='name' onChange={(e)=>setName(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputJob">Job</label>
                                        <input type="text" className="form-control" id="exampleInputJob"  name='job' onChange={(e)=>setJob(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="exampleInputdescriptionOne">Description</label>
                                        <CKEditor
                                            editor={ClassicEditor}
                                            onChange={ ( event, editor ) => {
                                                setDescription(editor.getData())
                                            } }

                                            name="description"

                                        />
                                        {/* <input type="text" className="form-control" id="exampleInputdescriptionOne"  name='description'  onChange={(e)=>setDescription(e.target.value)} /> */}
                                    </div>
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

export default TestimonialEdit
