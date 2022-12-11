import React,{useState,useEffect} from 'react'
import  ServiceData  from '../data/Service.json'
import ServiceDetails from './ServiceDetails'

const Service = () => {

const [items,setItems]  = useState(null);
useEffect(()=>{
  fetch("http://localhost:8081/service")
  .then((response)=>{return response.json()})
  .then((data)=> setItems(data))
},[])

  return (
    <div>
      <section id="services" className="services">
      <div className="container">

        <div className="section-title">
          {/* <span>{ServiceData[0].service_header}</span>
          <h2>{ServiceData[0].service_header}</h2>
          <p>{ServiceData[0].service_title}</p> */}
          <span>{items && items[0].service_header}</span>
          <h2>{items && items[0].service_header}</h2>
          <p>{items && items[0].service_title}</p>
        </div>

        <div className="row">
            {
                items && items.slice(1).map((item,index) => <ServiceDetails key={index}
                ServiceTitle={item.service_title}
                ServiceIcon={item.service_icon}
                ServiceDescription={item.service_description}
                />)

            }

           {/* <div className="row">
            {
                ServiceData.slice(1).map((Service,index) => <ServiceDetails key={index}
                ServiceTitle={Service.service_title}
                ServiceIcon={Service.service_icon}
                ServiceDescription={Service.service_description}
                />)

            } */}

            {/* data render Another way  */}
            {/* {

                ServiceData.map((Service,index) => {
                    return(
                        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                            <div className="icon-box">
                            <div className="icon"><i class={Service.service_icon}></i></div>
                            <h4 className="title"><a href="">{Service.service_title}</a></h4>
                            <p className="description">{Service.service_description}</p>
                            </div>
                        </div>
                    )
                })

            } */}

        </div>

      </div>
    </section>

    </div>
  )
}

export default Service
