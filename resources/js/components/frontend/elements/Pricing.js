import React,{useState,useEffect} from 'react'

const Pricing = () => {

  const [items,setItems] = useState(null);
  useEffect(()=>{
    fetch("http://localhost:8081/pricing")
    .then((response)=>{return response.json()})
    .then(data => setItems(data))
  },[]);

  return (
    <div>
    <section id="pricing" className="pricing">
      <div className="container">
        <div className="section-title">
          <span>Pricing</span>
          <h2>Pricing</h2>
          <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p>
        </div>

        <div className="row">

          {/* <div className="col-lg-3 col-md-6">
            <div className="box">
              <h3>Free</h3>
              <h4><sup>$</sup>0<span> / month</span></h4>
              <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li className="na">Pharetra massa</li>
                <li className="na">Massa ultricies mi</li>
              </ul>
              <div className="btn-wrap">
                <a href="#" className="btn-buy">Buy Now</a>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-4 mt-md-0">
            <div className="box featured">
              <h3>Business</h3>
              <h4><sup>$</sup>19<span> / month</span></h4>
              <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li>Pharetra massa</li>
                <li className="na">Massa ultricies mi</li>
              </ul>
              <div className="btn-wrap">
                <a href="#" className="btn-buy">Buy Now</a>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
            <div className="box">
              <h3>Developer</h3>
              <h4><sup>$</sup>29<span> / month</span></h4>
              <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li>Pharetra massa</li>
                <li>Massa ultricies mi</li>
              </ul>
              <div className="btn-wrap">
                <a href="#" className="btn-buy">Buy Now</a>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
            <div className="box">
              <span className="advanced">Advanced</span>
              <h3>Ultimate</h3>
              <h4><sup>$</sup>49<span> / month</span></h4>
              <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li>Pharetra massa</li>
                <li>Massa ultricies mi</li>
              </ul>
              <div className="btn-wrap">
                <a href="#" className="btn-buy">Buy Now</a>
              </div>
            </div>
          </div> */}

        {
          items && items.map((item,index)=>{
            return(
              <div className="col-lg-3 col-md-6 mt-4 mt-md-0" key={index}>
            <div className="box">
              {
                (item.cardFee) >29 ? (<><span className="advanced">Advanced</span></>) : ''
              }
              <h3>{item.cardTitle}</h3>
              <h4><sup>$</sup>{item.cardFee}<span> / month</span></h4>
              <ul>
                <li>{item.cardCourseOne}</li>
                <li>{item.cardCourseTwo}</li>
                <li>{item.cardCourseThree}</li>
                {
                  (item.cardFee) ==0 ? (<><li className="na">{item.cardCourseFour}</li></>) : (<><li>{item.cardCourseFour}</li></>)
                }
                {
                  (item.cardFee) < 20 ? (<><li className="na">{item.cardCourseFive}</li></>) : (<><li>{item.cardCourseFive}</li></>)
                }

              </ul>
              <div className="btn-wrap">
                <a href="#" className="btn-buy">Buy Now</a>
              </div>
            </div>
          </div>
            )
          })
        }


        </div>


      </div>
    </section>
    </div>
  )
}

export default Pricing
