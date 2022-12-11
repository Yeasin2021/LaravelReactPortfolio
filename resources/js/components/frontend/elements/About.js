import React , {useState,useEffect} from 'react'

const About = () => {
  const [items, setItems] = useState(null);

  useEffect(()=>{
    fetch("http://localhost:8081/about")
    .then((res)=>{ return res.json()})
    .then((data)=>{
      setItems(data)
      // console.log(data)
    })
  },[])

  return (
    <div>
      <div id="about" className="about">
      <div className="container">
      {
        items && items.map((item,index)=>{
          return(
            <div key={index}>
            <div className="section-title">
              <span>{item.header}</span>
              <h2>{item.header}</h2>
              <p>{item.title}</p>
            </div>

            <div className="row">
            {/* style={{ background:`url(${(item.image)})` }} */}
              <div className="image col-lg-4 d-flex align-items-stretch justify-content-center justify-content-lg-start">
                <img src={item.image} style={{ width:'100%',height:'auto' }} alt="" />
              </div>
              <div className="col-lg-8 d-flex flex-column align-items-stretch">
                <div className="content ps-lg-4 d-flex flex-column justify-content-center">
                  <div className="row">
                    <div className="col-lg-6">
                      <ul>
                        <li><i className="bi bi-chevron-right"></i> <strong>Name:</strong> <span>{item.name}</span></li>
                        <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>{item.website}</span></li>
                        <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>{item.phone}</span></li>
                        <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>{item.city}</span></li>
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <ul>
                        <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>{item.age}</span></li>
                        <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>{item.degree}</span></li>
                        <li><i className="bi bi-chevron-right"></i> <strong>PhEmailone:</strong> <span>{item.PhEmailone}</span></li>
                        <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>{item.Freelance}</span></li>
                      </ul>
                    </div>
                  </div>
                  <div className="row mt-n4">
                    <div className="col-md-6 mt-5 d-md-flex align-items-md-stretch">
                      <div className="count-box">
                        <i className="bi bi-emoji-smile" style={{ color: "#20b38e" }}></i>
                        <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span>
                        <p><strong>{item.happyClientOne}</strong> {item.happyClientTwo}</p>
                      </div>
                    </div>

                    <div className="col-md-6 mt-5 d-md-flex align-items-md-stretch">
                      <div className="count-box">
                        <i className="bi bi-journal-richtextr" style={{ color: "#8a1ac2" }}></i>
                        <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter"></span>
                        <p><strong>{item.projectOne}</strong> {item.projectTwo}</p>
                      </div>
                    </div>

                    <div className="col-md-6 mt-5 d-md-flex align-items-md-stretch">
                      <div className="count-box">
                        <i className="bi bi-clock" style={{ color: "#2cbdee" }}></i>
                        <span data-purecounter-start="0" data-purecounter-end="18" data-purecounter-duration="1" className="purecounter"></span>
                        <p><strong>{item.experienceOne}</strong> {item.experienceOne}</p>
                      </div>
                    </div>

                    <div className="col-md-6 mt-5 d-md-flex align-items-md-stretch">
                      <div className="count-box">
                        <i className="bi bi-award" style={{ color: "#ffb459" }}></i>
                        <span data-purecounter-start="0" data-purecounter-end="16" data-purecounter-duration="1" className="purecounter"></span>
                        <p><strong>{item.awardsOne}</strong> {item.awardsTwo}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="skills-content ps-lg-4">
                  <div className="progress">
                    <span className="skill">HTML <i className="val">100%</i></span>
                    <div className="progress-bar-wrap">
                      <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>

                  <div className="progress">
                    <span className="skill">CSS <i className="val">90%</i></span>
                    <div className="progress-bar-wrap">
                      <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>

                  <div className="progress">
                    <span className="skill">JavaScript <i className="val">75%</i></span>
                    <div className="progress-bar-wrap">
                      <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
          )
        })
      }
      </div>
    </div>
    </div>
  )
}

export default About
