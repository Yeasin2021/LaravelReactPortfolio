import React,{useState,useEffect} from 'react'

const ContactMessage = () => {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [subject,setSubject] = useState("");
    const [message,setMessage] = useState("");

    const formHandaler = (event) =>{
        event.preventDefault();
        const data = {name,email,subject,message};
        const url = "http://localhost:8000/contactMessage";
        fetch(url,{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then((response)=>{console.warn("Result",response)})
        .catch(error=>console.warn("Have Some Error: "+error))
        
    }
    
  return (
    <div>
      <form onSubmit={formHandaler} role="form" className="php-email-form">
        
              <div className="row">
                <div className="col-md-6 form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" value={name} onChange={(e)=>setName(e.target.value)}  required />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
                </div>
              </div>
              <div className="form-group mt-3">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" value={subject} onChange={(e)=>setSubject(e.target.value)} required />
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control" name="message" rows="6" placeholder="Message" value={message} onChange={(e)=>setMessage(e.target.value)} required></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>
    </div>
   
  )
}

export default ContactMessage
