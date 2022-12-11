import React from 'react'

const ServiceDetails = (props) => {
// distureting 
const {ServiceTitle,ServiceIcon,ServiceDescription} = props;
  return (
    <>
      <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box">
              <div className="icon"><i class={ServiceIcon}></i></div>
              <h4 className="title"><a href="">{ServiceTitle}</a></h4>
              <p className="description">{ServiceDescription}</p>
            </div>
        </div> 
    </>
  )
}

export default ServiceDetails
