import React, { useState } from 'react'
import axios from 'axios';

const ServiceForm = () => {
  const formStyleOne = {
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    margin: '25px 25px 25px 25px',
    position: 'relative'
  }
  const [title,setTitle] = useState('');
  const [icon,setIcon] = useState('');
  const [description,setDescription] = useState('');
  const onSubmit = (event) =>{
    event.preventDefault();
    console.log(icon+ "---" + title +"---"+ description);
  }

//   console.log(icon);
//   console.log(title);
//   console.log(description);

  return (
    <div className='container' style={ formStyleOne }>
        <div className="row">
            <div className="col-sm">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputCardicon">Card-Icon</label>
                        <input type="text" className="form-control"
                        id='exampleInputCardicon'
                        placeholder="Enter Card icon"
                        name='card_icon'
                        onChange={(e)=> setTitle(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputCardTitle">Card Title</label>
                        <input type="text" className="form-control"
                        id="exampleInputCardTitle" placeholder="Enter Card Title"
                        name='card_title'
                        onChange={(e)=> setIcon(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputCardDes">Card Description</label>
                        <input type="text" className="form-control"
                        id="exampleInputCardDes"
                        placeholder="Enter Card Title"
                        name='card_description'
                        onChange={(e)=> setDescription(e.target.value)}/>
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ marginTop:"10px" }}>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ServiceForm
