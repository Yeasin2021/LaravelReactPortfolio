import React,{useState,useEffect} from 'react';


const Resume = () => {

  const [items,setItems] = useState(null);
  useEffect(()=>{
    fetch("http://localhost:8081/resume")
    .then((res)=>{return res.json()})
    .then((data)=>setItems(data))
    .catch(error => console.warn(error))
  },[]);

  return (
      <div id="resume" className="resume" style={{ marginTop:'5%' }}>
      <div className="container">
        <div className="section-title">
          <span>My Resume</span>
          <h2>My Resume</h2>
          <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p>
        </div>
       {
        items && items.map((item,index)=>{
          return(
            <div key={index}>
              <div className="row">
                <div className="col-lg-6">
                  <h3 className="resume-title">{item.title_one}</h3>
                  <div className="resume-item pb-0">
                    <h4>{item.key_word_one}</h4>
                    <p><em>{item.details}</em></p>
                    <p>
                    <ul>
                      <li>{item.address}</li>
                      <li>{item.phone}</li>
                      <li>{item.mail}</li>
                    </ul>
                    </p>
                  </div>

                  <h3 className="resume-title">{item.title_one}</h3>
                  <div className="resume-item">
                    <h4>{item.degree1}</h4>
                    <h5>{item.session1}</h5>
                    <p><em>{item.innstitue1}</em></p>
                    <p>{item.details1}</p>
                  </div>
                  <div className="resume-item">
                    <h4>{item.degree2}</h4>
                    <h5>{item.session2}</h5>
                    <p><em>{item.innstitue2}</em></p>
                    <p>{item.details2}</p>
                  </div>

                </div>
                <div className="col-lg-6">
                  <h3 className="resume-title">{item.title}</h3>
                  <div className="resume-item">
                    <h4>{item.resume_item_1}</h4>
                    <h5>{item.resume_item_2}</h5>
                    <p><em>{item.resume_item_3}</em></p>
                    <p>
                    <ul>
                      <li>{item.des_1}</li>
                      <li>{item.des_2}</li>
                      <li>{item.des_3}</li>
                      <li>{item.des_4}</li>
                    </ul>
                    </p>
                  </div>
                  <div className="resume-item">
                    <h4>{item.resume_item_1}</h4>
                    <h5>{item.resume_item_2}</h5>
                    <p><em>{item.resume_item_3}</em></p>
                    <p>
                    <ul>
                      <li>{item.des_1}</li>
                      <li>{item.des_2}</li>
                      <li>{item.des_3}</li>
                      <li>{item.des_4}</li>
                    </ul>
                    </p>
                  </div>
                </div>
             </div>
            </div>
          )
        })
       }
      </div>
    </div>
  )
}

export default Resume
