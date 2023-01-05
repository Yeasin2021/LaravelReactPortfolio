import React,{useState} from 'react'
import axios from 'axios';

const FooterForm = () => {

const formStyleOne = {
    marginLeft: '300px',
    marginTop: '4%',
    }

const [file,setFile] = useState();
const imagePreviewFunction = (e) =>{
    setFile(URL.createObjectURL(e.target.files[0]));
}

const [iconOne,setIconOne] = useState();
const [iconTwo,setIconTwo] = useState();
const [iconThree,setIconThree] = useState();
const [iconFour,setIconFour] = useState();
const [iconFive,setIconFive] = useState();

const [title,setTitle] = useState();
const [header,setHeader] = useState();
const [copyRight,setCopyRight] = useState();
const [developerName,setDeveloperName] = useState();

const onSubmitForm = async(e) =>{
    e.preventDefault();
    try{
        const formData = new FormData();
        formData.append('title',title);
        formData.append('header',header);
        formData.append('copyRight',copyRight);
        formData.append('developerName',developerName);
        formData.append('image',file);
        formData.append('iconOne',iconOne);
        formData.append('iconTwo',iconTwo);
        formData.append('iconThree',iconThree);
        formData.append('iconFour',iconFour);
        formData.append('iconFive',iconFive);
        await axios.post('footer',formData);
    }catch(error){
        console.log(error.message);
    }

}

  return (
    <div>
        <div className="container">
            <div className="row" style={ formStyleOne }>

                <form onSubmit={onSubmitForm}>
                    <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <div className="form-group">
                                    <label htmlFor="exampleInputTitle">Footer Title</label>
                                    <input type="text" className="form-control" id="exampleInputTitle" placeholder="title" name='title' onChange={(e)=>setTitle(e.target.value)}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputHeader">Footer Header</label>
                                    <input type="text" className="form-control" id="exampleInputHeader" placeholder="header" name='header' onChange={(e)=>setHeader(e.target.value)}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputCopyRight">Footer CopyRight</label>
                                    <input type="text" className="form-control" id="exampleInputCopyRight" placeholder="Copy Right" name='copyRight' onChange={(e)=>setCopyRight(e.target.value)}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputDesign">Desige By</label>
                                    <input type="text" className="form-control" id="exampleInputDesign" placeholder="Desigenr's Name" name="developerName" onChange={(e)=>setDeveloperName(e.target.value)}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputImage">Footer Back Ground Image</label>
                                    <input type="file" className="form-control" id="exampleInputImage" placeholder="Footer Image" name="image" onChange={imagePreviewFunction}/>
                                    <img src={file} className="mt-1"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <div className="form-group">
                                    <label htmlFor="exampleInputIcon1">Footer Icon 1</label>
                                    <input type="text" className="form-control" id="exampleInputIcon1" placeholder="Icon One" name='icon_one' onChange={(e)=>setIconOne(e.target.value)}/>
                                    <i className={iconOne} height="15px" width="15px"></i>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputIcon2">Footer Icon 2</label>
                                    <input type="text" className="form-control" id="exampleInputIcon2" placeholder="Icon Two" name='icon_two'  onChange={(e)=>setIconTwo(e.target.value)}/>
                                    <i className={iconTwo} height="15px" width="15px"></i>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputIcon3">Footer Icon 3</label>
                                    <input type="text" className="form-control" id="exampleInputIcon3" placeholder="Icon Three" name='icon_three' onChange={(e)=>setIconThree(e.target.value)}/>
                                    <i className={iconThree} height="15px" width="15px"></i>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputIcon4">Footer Icon 4</label>
                                    <input type="text" className="form-control" id="exampleInputIcon4" placeholder="Icon Four" name='icon_four'onChange={(e)=>setIconFour(e.target.value)}/>
                                    <i className={iconFour} height="15px" width="15px"></i>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputIcon5">Footer Icon 5</label>
                                    <input type="text" className="form-control" id="exampleInputIcon5" placeholder="Icon Five" name='icon_five' onChange={(e)=>setIconFive(e.target.value)}/>
                                    <i className={iconFive} height="15px" width="15px"></i>
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

export default FooterForm
