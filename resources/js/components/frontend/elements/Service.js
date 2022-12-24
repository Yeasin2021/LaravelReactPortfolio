import React,{useState,useEffect} from 'react'
import ServiceDetails from './ServiceDetails'

const Service = () => {

const [items,setItems]  = useState(null);
// useEffect(()=>{
//   fetch("http://localhost:8081/service")
//   .then((response)=>{return response.json()})
//   .then((data)=> setItems(data))
// },[])

useEffect(()=>{
    const dataShow = async () =>{
        const data_response = await axios.get('service')
        .then((result)=>setItems(result.data.services));
    }
    dataShow();
  },[]);

  return (
    <div>
      <section id="services" className="services">
      <div className="container">

        {/* <div className="section-title">
          <span>{items && items[0].service_header}</span>
          <h2>{items && items[0].service_header}</h2>
          <p>{items && items[0].service_title}</p>
        </div> */}

        <div className="section-title">
          <span>My Services</span>
          <h2>My Services</h2>
          <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p>
        </div>

        <div className="row">
            {/* {
                items && items.slice(1).map((item,index) => <ServiceDetails key={index}
                ServiceTitle={item.service_title}
                ServiceIcon={item.service_icon}
                ServiceDescription={item.service_description}
                />)

            } */}
            {
                items && items.map((item,index) => <ServiceDetails key={index}
                ServiceTitle={item.card_title}
                ServiceIcon={item.card_icon}
                ServiceDescription={item.card_description}
                />)

            }
            {/* data render Another way  */}
        </div>

      </div>
    </section>

    </div>
  )
}

export default Service
