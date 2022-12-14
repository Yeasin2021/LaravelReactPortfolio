// import React from 'react'
// import ReactDOM from "react-dom";
// import { useRef, useState , useEffect } from 'react';
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, Navigation } from "swiper";
// import "swiper/css/bundle";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// const Testimonial = () => {


//  const [items,setItems] = useState(null);

//  useEffect(() =>{
//     fetch("http://localhost:8081/testimonial")
//     .then(response => {
//       return response.json()
//     })
//     .then(data => {
//       setItems(data)
//     })
//  },[]);


//   return (

//     <section id="testimonials" className="testimonials" style ={ { backgroundImage: "url('testimonials-bg.jpg')" } }>

//       <div className="container position-relative">

//         <div className="swiper testimonials-slider " data-aos="fade-up" data-aos-delay="100">

//           <div className="swiper-wrapper">
//           {
//             items && items.map((item,index) => {
//               return(
//                 <Swiper key={index}
//                 spaceBetween={30}
//                 centeredSlides={true}
//                 autoplay={{
//                   delay: 2500,
//                   disableOnInteraction: false,
//                 }}
//                 pagination={{
//                   clickable: true,
//                 }}
//                 // navigation={true}
//                 modules={[Autoplay, Pagination, Navigation]}
//                 className="mySwiper"
//               >
//                 <SwiperSlide>
//                 <div className="swiper-slide">
//                       <div className="testimonial-item">
//                         <img src={item.image1} className="testimonial-img" alt="" />
//                         <h3>{item.header1}</h3>
//                         <h4>{item.title1}</h4>
//                         <p>
//                           <i className="bx bxs-quote-alt-left quote-icon-left"></i>
//                           {item.description1}
//                           <i className="bx bxs-quote-alt-right quote-icon-right"></i>
//                         </p>
//                       </div>
//                     </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                 <div className="swiper-slide">
//                       <div className="testimonial-item">
//                         <img src={item.image2} alt="" className="testimonial-img"/>
//                         <h3>{item.header2}</h3>
//                         <h4>{item.title2}</h4>
//                         <p>
//                           <i className="bx bxs-quote-alt-left quote-icon-left"></i>
//                           {item.description2}
//                           <i className="bx bxs-quote-alt-right quote-icon-right"></i>
//                         </p>
//                       </div>
//                     </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                 <div className="swiper-slide">
//                       <div className="testimonial-item">
//                         <img src={item.image3} className="testimonial-img" alt="" />
//                         <h3>{item.header3}</h3>
//                         <h4>{item.title3}</h4>
//                         <p>
//                           <i className="bx bxs-quote-alt-left quote-icon-left"></i>
//                           {item.description3}
//                           <i className="bx bxs-quote-alt-right quote-icon-right"></i>
//                         </p>
//                       </div>
//                     </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                 <div className="swiper-slide">
//                       <div className="testimonial-item">
//                         <img src={item.image4} className="testimonial-img" alt="" />
//                         <h3>{item.header4}</h3>
//                         <h4>{item.title4}</h4>
//                         <p>
//                           <i className="bx bxs-quote-alt-left quote-icon-left"></i>
//                           {item.description4}
//                           <i className="bx bxs-quote-alt-right quote-icon-right"></i>
//                         </p>
//                       </div>
//                     </div>
//                 </SwiperSlide>
//                  </Swiper>
//               )
//             })
//           }

//           </div>
//           <div className="swiper-pagination"></div>
//         </div>

//       </div>
//     </section>

//   )
// }

// export default Testimonial



import React from 'react'
import ReactDOM from "react-dom";
import { useRef, useState , useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Testimonial = () => {
const [items,setItems] = useState(null);
useEffect(()=>{
    const dataShow = async () =>{
        const data_response = await axios.get('testimonials')
        .then((result)=>setItems(result.data.testimonial));
    }
    dataShow();
  },[]);

  return (

    <section id="testimonials" className="testimonials" style ={ { backgroundImage: "url('testimonials-bg.jpg')" } }>
      <div className="container position-relative">
        <div className="swiper testimonials-slider " data-aos="fade-up" data-aos-delay="100">
          <div className="swiper-wrapper">
                <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay, Pagination, Navigation]}

              >
                {
                    items && items.map((item,index)=>(
                        <div>
                            <SwiperSlide>
                                <div className="swiper-slide">
                                    <div className="testimonial-item">
                                        <img src={`back-end/img/testimonial/${item.image}`} className="testimonial-img" alt="" />
                                        <h3>{item.name}</h3>
                                        <h4>{item.occupation}</h4>
                                        <p>
                                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                        {/* {item.description} */}
                                        {/* <p dangerouslySetInnerHTML={{ __html:item.description }}></p> */}
                                        <p dangerouslySetInnerHTML={{ __html:item.description }}></p>
                                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                        </p>
                                    </div>
                                    </div>
                            </SwiperSlide>
                        </div>

                    ))
                }
                </Swiper>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>

  )
}

export default Testimonial

