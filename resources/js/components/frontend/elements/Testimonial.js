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

 useEffect(() =>{
    fetch("http://localhost:8081/testimonial")
    .then(response => {
      return response.json()
    })
    .then(data => {
      setItems(data)
    })
 },[]);


  return (

    <section id="testimonials" className="testimonials">
      <div className="container position-relative">

        <div className="swiper testimonials-slider " data-aos="fade-up" data-aos-delay="100">
          <div className="swiper-wrapper">
          {
            items && items.map((item,index) => {
              return(
                <Swiper key={index}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                // navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                <div className="swiper-slide">
                      <div className="testimonial-item">
                        <img src={item.image1} className="testimonial-img" alt="" />
                        <h3>{item.header1}</h3>
                        <h4>{item.title1}</h4>
                        <p>
                          <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                          {item.description1}
                          <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                        </p>
                      </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="swiper-slide">
                      <div className="testimonial-item">
                        <img src={item.image2} alt="" className="testimonial-img"/>
                        <h3>{item.header2}</h3>
                        <h4>{item.title2}</h4>
                        <p>
                          <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                          {item.description2}
                          <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                        </p>
                      </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="swiper-slide">
                      <div className="testimonial-item">
                        <img src={item.image3} className="testimonial-img" alt="" />
                        <h3>{item.header3}</h3>
                        <h4>{item.title3}</h4>
                        <p>
                          <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                          {item.description3}
                          <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                        </p>
                      </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="swiper-slide">
                      <div className="testimonial-item">
                        <img src={item.image4} className="testimonial-img" alt="" />
                        <h3>{item.header4}</h3>
                        <h4>{item.title4}</h4>
                        <p>
                          <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                          {item.description4}
                          <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                        </p>
                      </div>
                    </div>
                </SwiperSlide>
                {/* <SwiperSlide>
                <div className="swiper-slide">
                      <div className="testimonial-item">
                        <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt="" />
                        <h3>John Larson</h3>
                        <h4>Entrepreneur</h4>
                        <p>
                          <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                          Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                          <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                        </p>
                      </div>
                    </div>
                </SwiperSlide> */}
                 </Swiper>
              )
            })
          }

          </div>
          <div className="swiper-pagination"></div>
        </div>

      </div>
    </section>
    // <div style={{ marginLeft: '50px'}}>
    //   <Swiper
    // modules={[Navigation, Pagination, Scrollbar, A11y]}
    // loop = 'true'
    // spaceBetween={50}
    // slidesPerView={3}
    // navigation
    // pagination={{ clickable: true }}
    // scrollbar={{ draggable: true }}
    // onSwiper={(swiper) => console.log(swiper)}
    // onSlideChange={() => console.log('slide change')}
    // >
    //   <SwiperSlide>
    //   <div className="swiper-slide">
    //           <div className="testimonial-item">
    //             <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="" />
    //             <h3>Saul Goodman</h3>
    //             <h4>Ceo &amp; Founder</h4>
    //             <p>
    //               <i className="bx bxs-quote-alt-left quote-icon-left"></i>
    //               Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
    //               <i className="bx bxs-quote-alt-right quote-icon-right"></i>
    //             </p>
    //           </div>
    //         </div>
    //   </SwiperSlide>

    //   <SwiperSlide>
    //   <div className="swiper-slide">
    //           <div className="testimonial-item">
    //             <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt="" />
    //             <h3>Sara Wilsson</h3>
    //             <h4>Designer</h4>
    //             <p>
    //               <i className="bx bxs-quote-alt-left quote-icon-left"></i>
    //               Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
    //               <i className="bx bxs-quote-alt-right quote-icon-right"></i>
    //             </p>
    //           </div>
    //         </div>
    //   </SwiperSlide>

    //   <SwiperSlide>
    //   <div className="swiper-slide">
    //           <div className="testimonial-item">
    //             <img src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt="" />
    //             <h3>Jena Karlis</h3>
    //             <h4>Store Owner</h4>
    //             <p>
    //               <i className="bx bxs-quote-alt-left quote-icon-left"></i>
    //               Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
    //               <i className="bx bxs-quote-alt-right quote-icon-right"></i>
    //             </p>
    //           </div>
    //         </div>
    //   </SwiperSlide>

    //   <SwiperSlide>
    //   <div className="swiper-slide">
    //           <div className="testimonial-item">
    //             <img src="assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt="" />
    //             <h3>Matt Brandon</h3>
    //             <h4>Freelancer</h4>
    //             <p>
    //               <i className="bx bxs-quote-alt-left quote-icon-left"></i>
    //               Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
    //               <i className="bx bxs-quote-alt-right quote-icon-right"></i>
    //             </p>
    //           </div>
    //         </div>
    //   </SwiperSlide>

    //   <SwiperSlide>
    //   <div className="swiper-slide">
    //           <div className="testimonial-item">
    //             <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt="" />
    //             <h3>John Larson</h3>
    //             <h4>Entrepreneur</h4>
    //             <p>
    //               <i className="bx bxs-quote-alt-left quote-icon-left"></i>
    //               Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
    //               <i className="bx bxs-quote-alt-right quote-icon-right"></i>
    //             </p>
    //           </div>
    //         </div>
    //   </SwiperSlide>

    // </Swiper>
    // </div>





  )
}

export default Testimonial
