import React,{useState,useEffect} from 'react'
import ContactMessage from './ContactMessage';

const Contacts = () => {
  const [items,setItems] = useState(null);
//   useEffect(()=> {
//     fetch("http://localhost:8081/contact")
//     .then((response)=>{return response.json()})
//     .then(data=>setItems(data))
//   },[])
useEffect(()=>{
    const dataShow = async () =>{
        const data_response = await axios.get('contact')
        .then((result)=>setItems(result.data.contact));
    }
    dataShow();
  },[]);
  return (
    <div>
      <section id="contact" className="contact">
      <div className="container">
      {
        items && items.map((item,index)=>{
          return(
            <div key={index}>
               <div className="section-title">
          <span>Contact Me</span>
          <h2>Contact Me</h2>
          <p>{item.title}</p>
        </div>

        <div className="row">

          <div className="col-lg-6">

            <div className="row">
              <div className="col-md-12">
                <div className="info-box">
                  <i className="bx bx-share-alt"></i>
                  <h3>Social Profiles</h3>
                  <div className="social-links">
                    {/* {
                       item.icons.map((icon,index)=>(
                        <div key={index}>
                            <a href="#" className="twitter"><i className={icon}></i></a>
                            <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                            <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                            <a href="#" className="google-plus"><i className="bi bi-skype"></i></a>
                            <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
                        </div>
                       ))
                    } */}
                    <div>
                            <a href="#" className="twitter"><i className={item.icon_one}></i></a>
                            <a href="#" className="facebook"><i className={item.icon_two}></i></a>
                            <a href="#" className="instagram"><i className={item.icon_three}></i></a>
                            <a href="#" className="google-plus"><i className={item.icon_four}></i></a>
                            <a href="#" className="linkedin"><i className={item.icon_five}></i></a>
                        </div>

                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box mt-4">
                  <i className="bx bx-envelope"></i>
                  <h3>Email Me</h3>
                  <p>{item.contactEmail}</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box mt-4">
                  <i className="bx bx-phone-call"></i>
                  <h3>Call Me</h3>
                  <p>{item.contactPhone}</p>
                </div>
              </div>
            </div>

          </div>

          <div className="col-lg-6">
            {/* <form action="forms/contact.php" method="post" role="form" className="php-email-form">
              <div className="row">
                <div className="col-md-6 form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                </div>
              </div>
              <div className="form-group mt-3">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control" name="message" rows="6" placeholder="Message" required></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form> */}
            <ContactMessage />
          </div>

        </div>
            </div>
          )
        })
      }
        {/* <div className="section-title">
          <span>Contact Me</span>
          <h2>Contact Me</h2>
          <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p>
        </div>

        <div className="row">

          <div className="col-lg-6">

            <div className="row">
              <div className="col-md-12">
                <div className="info-box">
                  <i className="bx bx-share-alt"></i>
                  <h3>Social Profiles</h3>
                  <div className="social-links">
                    <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
                    <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                    <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                    <a href="#" className="google-plus"><i className="bi bi-skype"></i></a>
                    <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box mt-4">
                  <i className="bx bx-envelope"></i>
                  <h3>Email Me</h3>
                  <p>contact@example.com</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box mt-4">
                  <i className="bx bx-phone-call"></i>
                  <h3>Call Me</h3>
                  <p>+1 5589 55488 55</p>
                </div>
              </div>
            </div>

          </div>

          <div className="col-lg-6">
            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
              <div className="row">
                <div className="col-md-6 form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                </div>
              </div>
              <div className="form-group mt-3">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control" name="message" rows="6" placeholder="Message" required></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>

        </div> */}

      </div>
    </section>
    </div>
  )
}

export default Contacts
