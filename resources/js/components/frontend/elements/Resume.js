import React,{useState,useEffect} from 'react';
import item from '../data/Resume.json';
import Data from '../data/TestTwo.json';

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

        {/* <div className="row">
          <div className="col-lg-6">
            <h3 className="resume-title">{item..title_one}</h3>
            <div className="resume-item pb-0">
              <h4>{item.[1].key_word_one}</h4>
              <p><em>{item.[2].details}</em></p>
              <p>
              <ul>
                <li>{item.[3].address}</li>
                <li>{item.[4].phone}</li>
                <li>{item.[5].mail}</li>
              </ul>
              </p>
            </div>

            <h3 className="resume-title">{item.Education.title_one}</h3>
            <div className="resume-item">
              <h4>{item.Education[1].degree1}</h4>
              <h5>{item.Education[2].session1}</h5>
              <p><em>{item.Education[3].innstitue1}</em></p>
              <p>{item.Education[4].details1}</p>
            </div>
            <div className="resume-item">
              <h4>{item.Education[5].degree2}</h4>
              <h5>{item.Education[6].session2}</h5>
              <p><em>{item.Education[7].innstitue2}</em></p>
              <p>{item.Education[8].details2}</p>
            </div>

          </div>
          <div className="col-lg-6">
            <h3 className="resume-title">{item.experience_1.title}</h3>
            <div className="resume-item">
              <h4>{item.experience_1[1].resume_item_1}</h4>
              <h5>{item.experience_1[2].resume_item_2}</h5>
              <p><em>{item.experience_1[3].resume_item_3}</em></p>
              <p>
              <ul>
                <li>{item.experience_1[4].des_1}</li>
                <li>{item.experience_1[5].des_2}</li>
                <li>{item.experience_1[6].des_3}</li>
                <li>{item.experience_1[7].des_4}</li>
              </ul>
              </p>
            </div>
            <div className="resume-item">
              <h4>{item.experience_2.resume_item_1}</h4>
              <h5>{item.experience_2[1].resume_item_2}</h5>
              <p><em>{item.experience_2[2].resume_item_3}</em></p>
              <p>
              <ul>
                <li>{item.experience_2[3].des_1}</li>
                <li>{item.experience_2[4].des_2}</li>
                <li>{item.experience_2[5].des_3}</li>
                <li>{item.experience_2[6].des_4}</li>
              </ul>
              </p>
            </div>



          </div>
        </div> */}

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
