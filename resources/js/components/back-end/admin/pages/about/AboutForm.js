
import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import Music from '../sound/add1.wav';

const AboutForm = () => {

    const formStyleOne = {
        marginLeft: '300px',
        marginTop: '4%',
        }

    const {id} = useParams();
    const [input,setInput] = useState(
        {
            title:"",
            header:"",
            name:"",
            age:"",
            website:"",
            degree:"",
            phone:"",
            email:"",
            city:"",
            job:"",
            descriptionOne:"",
            descriptionTwo:"",
            descriptionThree:"",
            descriptionFour:"",
            image:"",
        }
    );
    useEffect(()=>{
        try{
            const getSingleRecord = async () =>{
            const response = await axios.get(`/footer/${id}/edit`);
            console.log(response.data.edit);
            setInput(response.data.edit);
          };
          getSingleRecord();
        }catch(error){
          console.log(error);
        }
    },[id])




    const [file,setFile] = useState();
    const [image,setImage] = useState();
    const imagePreviewFunction = (e) =>{
        setFile(URL.createObjectURL(e.target.files[0]));
        setImage(e.target.files[0]);
    }

    const [name,setName] = useState();
    const [age,setAge] = useState();
    const [website,setWebsite] = useState();
    const [degree,setDegree] = useState();
    const [phone,setPhone] = useState();
    const [email,setEmail] = useState();
    const [city,setCity] = useState();
    const [job,setJob] = useState();
    const [descriptionOne,setDescriptionOne] = useState();
    const [descriptionTwo,setDescriptionTwo] = useState();
    const [descriptionThree,setDescriptionThree] = useState();
    const [descriptionFour,setDescriptionFour] = useState();


    const onSubmitForm = async(e) =>{
        e.preventDefault();
        try{
            const audio = new Audio(Music);
            const formData = new FormData();
            formData.append('title',title);
            formData.append('header',header);
            formData.append('copyRight',copyRight);
            formData.append('developerName',developerName);
            formData.append('image',image);
            formData.append('iconOne',iconOne);
            formData.append('iconTwo',iconTwo);
            formData.append('iconThree',iconThree);
            formData.append('iconFour',iconFour);
            formData.append('iconFive',iconFive);
            await axios.post(`/footer-update/${id}`,formData);
            toast.success("Data Updated Successfully 😲 ")
            audio.play();
            // await axios.post(`/footer-update/${id}`,input);
        }catch(error){
            console.log(error.message);
        }

    }

      return (
        <div>
            <div className="container">
                <div className="row" style={ formStyleOne }>

                    <form onSubmit={onSubmitForm} encType="multipart/form-data">
                        <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="exampleInputTitle">Title</label>
                                        <input type="text" className="form-control" id="exampleInputTitle"  name='title' onChange={(e)=>setTitle(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputHeader">Header</label>
                                        <input type="text" className="form-control" id="exampleInputHeader"  name='header' onChange={(e)=>setHeader(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputName">Name</label>
                                        <input type="text" className="form-control" id="exampleInputName"  name='name' onChange={(e)=>setName(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputWebsite">Website</label>
                                        <input type="text" className="form-control" id="exampleInputWebsite"  name="website" onChange={(e)=>setWebsite(e.target.value)} />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="exampleInputCity">City</label>
                                        <input type="text" className="form-control" id="exampleInputCityl"  name='city' onChange={(e)=>setCity(e.target.value)} />

                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputJob">Job</label>
                                        <input type="text" className="form-control" id="exampleInputJob"  name='job' onChange={(e)=>setJob(e.target.value)} />

                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputDegree">Degree</label>
                                        <input type="text" className="form-control" id="exampleInputDegree"  name='degree' onChange={(e)=>setDegree(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card">
                                <div className="card-body">

                                    <div className="form-group">
                                        <label htmlFor="exampleInputdescriptionOne">DescriptionOne</label>
                                        <input type="text" className="form-control" id="exampleInputdescriptionOne"  name='descriptionOne'  onChange={(e)=>setDescriptionOne(e.target.value)} />

                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="exampleInputDescriptionTwo">DescriptionTwo</label>
                                        <input type="text" className="form-control" id="exampleInputDescriptionTwo"  name='descriptionTwo' onChange={(e)=>setDescriptionTwo(e.target.value)} />

                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputDescriptionThree">DescriptionThree</label>
                                        <input type="text" className="form-control" id="exampleInputDescriptionThree"  name='descriptionThree' onChange={(e)=>setDescriptionThree(e.target.value)} />

                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputDescriptionFour">DescriptionFour</label>
                                        <input type="text" className="form-control" id="exampleInputDescriptionFour"  name='descriptionFour' onChange={(e)=>setDescriptionFour(e.target.value)} />

                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPhone">Phone</label>
                                        <input type="text" className="form-control" id="exampleInputPhone"  name='phone' onChange={(e)=>setPhone(e.target.value)} />

                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail">Email</label>
                                        <input type="text" className="form-control" id="exampleInputEmail"  name='email' onChange={(e)=>setEmail(e.target.value)} />

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

export default AboutForm
