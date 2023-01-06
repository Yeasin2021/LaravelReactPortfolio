import axios from 'axios';
import React, {useState, useEffect} from 'react'
// import Items from '../data/Footer.json'

const Footer = () => {
  const [items,setItems] = useState(null);
//   useEffect(()=>{
//     fetch("http://localhost:8081/footer")
//     .then(res => {return res.json()})
//     .then(data => setItems(data))
//   },[]);
  useEffect(()=>{
    const dataShow = async () =>{
        const data_response = await axios.get('footer')
        .then((result)=>setItems(result.data.footer));
    }
    dataShow();
  },[]);
  return (
    <div>
    {
    items && items.map((item,index)=>(
      <footer className='footer' style={{ backgroundImage: `url(back-end/img/footer/${(item.image)})` }}>
      <div className="container">

            <div key={index}>
              <h3>{item.title}</h3>
              <p>{item.header}</p>
              <div className='social-links'>
                <a href="#" className="twitter"><i className={item.icon_one}></i></a>
                <a href="#" className="facebook"><i className={item.icon_two}></i></a>
                <a href="#" className="instagram"><i className={item.icon_three}></i></a>
                <a href="#" className="skype"><i className={item.icon_four}></i></a>
                <a href="#" className="linkedin"><i className={item.icon_five}></i></a>
              </div>

              <div className="copyright">
                <strong><span>{item.copy_right}</span></strong>
              </div>
              <div className="credits">

              {item.developer_name}
              </div>
            </div>
            </div>
        </footer>
        ))
    }
    </div>
  )
}

export default Footer
