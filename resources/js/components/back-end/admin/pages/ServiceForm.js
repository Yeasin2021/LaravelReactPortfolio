import React from 'react'

const ServiceForm = () => {
  const formStyleOne = {
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    margin: '25px 25px 25px 25px',
    position: 'relative'
  }
  return (
    <div className='container' style={ formStyleOne }>
  <div className="row">
    <div className="col-sm">
    <form>
            <div className="form-group">
                <label htmlFor="exampleInputCardicon">Card-Icon</label>
                <input type="text" className="form-control" id='exampleInputCardicon'  placeholder="Enter Card icon" name='card_icon'/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputCardTitle">Card Title</label>
                <input type="text" className="form-control" id="exampleInputCardTitle" placeholder="Enter Card Title" name='card_title' />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputCardDes">Card Description</label>
                <input type="text" className="form-control" id="exampleInputCardDes" placeholder="Enter Card Title" name='card_description' />
            </div>

            <button type="submit" className="btn btn-primary" style={{ marginTop:"10px" }}>Submit</button>
        </form>
    </div>

  </div>


    </div>
  )
}

export default ServiceForm
