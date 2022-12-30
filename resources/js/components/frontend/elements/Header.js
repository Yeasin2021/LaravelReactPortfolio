import React,{useState,useEffect} from 'react';


const Header = () => {
  const [items,setItems] = useState(null);
  useEffect(()=>{
    fetch("http://localhost:8081/header")
    .then((res)=>{return res.json()})
    .then(data => setItems(data))
  },[]);

// useEffect(()=>{
//     const dataShow = async () =>{
//         const data_response = await axios.get('slider')
//         .then((result)=>setItems(result.data.slider));
//     }
//     dataShow();
//   },[]);
  return (
    <div>
      <div className='header'>
  <header  className="fixed-top d-flex justify-content-center align-items-center header-transparent">

    <nav id="navbar"  className="navbar">
      <ul>
        <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
        <li><a className="nav-link scrollto" href="#about">About</a></li>
        <li><a className="nav-link scrollto" href="#resume">Resume</a></li>
        <li><a className="nav-link scrollto" href="#services">Services</a></li>
        <li><a className="nav-link scrollto " href="#portfolio">Portfolio</a></li>

        <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
          <ul>
            <li><a href="#">Drop Down 1</a></li>
            <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
              <ul>
                <li><a href="#">Deep Drop Down 1</a></li>
                <li><a href="#">Deep Drop Down 2</a></li>
                <li><a href="#">Deep Drop Down 3</a></li>
                <li><a href="#">Deep Drop Down 4</a></li>
                <li><a href="#">Deep Drop Down 5</a></li>
              </ul>
            </li>
            <li><a href="#">Drop Down 2</a></li>
            <li><a href="#">Drop Down 3</a></li>
            <li><a href="#">Drop Down 4</a></li>
          </ul>
        </li>
        <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
      </ul>
      <i className="bi bi-list mobile-nav-toggle"></i>
    </nav>

  </header>

  {
      items && items.map((item,index) => {
        return(
          <div className="hero"  style={{ backgroundImage: `url(${(item.image)})` }} key={index}>
          <div className="hero-container">
            <h1>{item.title}</h1>
            <h2>{item.description}</h2>
            {/* <h1>{item.slider_title}</h1>
            <h2>{item.slider_header}</h2> */}
            <a href="#about" className="btn-scroll scrollto" title="Scroll Down"><i className={item.icon}></i></a>
          </div>
        </div>
        )
      })
    }



    </div>
    </div>
  )
}

export default Header
