import React,{useState} from 'react'

const FooterForm = () => {

const formStyleOne = {
    marginLeft: '300px',
    marginTop: '4%',
    }

const [file,setFile] = useState();
const imagePreviewFunction = (e) =>{
    setFile(URL.createObjectURL(e.target.files[0]));
}

  return (
    <div>
        <div className="container">
            <div className="row" style={ formStyleOne }>

                <form>
                    <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <div className="form-group">
                                    <label htmlFor="exampleInputTitle">Footer Title</label>
                                    <input type="text" className="form-control" id="exampleInputTitle" placeholder="title" name='title'/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputHeader">Footer Header</label>
                                    <input type="text" className="form-control" id="exampleInputHeader" placeholder="header" name='header'/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputCopyRight">Footer CopyRight</label>
                                    <input type="text" className="form-control" id="exampleInputCopyRight" placeholder="Copy Right" name='copy_right'/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputDesign">Desige By</label>
                                    <input type="text" className="form-control" id="exampleInputDesign" placeholder="Desigenr's Name" name="developer_name"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputImage">Footer Back Ground Image</label>
                                    <input type="file" className="form-control" id="exampleInputImage" placeholder="Footer Image" name="image" onChange={imagePreviewFunction}/>
                                    <img src={file} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <div className="form-group">
                                    <label htmlFor="exampleInputIcon1">Footer Icon 1</label>
                                    <input type="text" className="form-control" id="exampleInputIcon1" placeholder="Icon One" name='icon_one'/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputIcon2">Footer Icon 2</label>
                                    <input type="text" className="form-control" id="exampleInputIcon2" placeholder="Icon Two" name='icon_two'/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputIcon3">Footer Icon 3</label>
                                    <input type="text" className="form-control" id="exampleInputIcon3" placeholder="Icon Three" name='icon_three'/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputIcon4">Footer Icon 4</label>
                                    <input type="text" className="form-control" id="exampleInputIcon4" placeholder="Icon Four" name='icon_four'/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputIcon5">Footer Icon 5</label>
                                    <input type="text" className="form-control" id="exampleInputIcon5" placeholder="Icon Five" name='icon_five'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="form-check"></div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default FooterForm
