import React,{useState,useEffect} from 'react'

const Portfolio = () => {
  const [items,setItems]  = useState([]);
  useEffect(()=>{
    const url = "http://localhost:8081/portfolio";
    fetch(url)
    .then(res=>{return res.json()})
    .then(data => setItems(data))
    .catch(error => console.warn(error))
  },[])

  return (
    <div>
       <section id="portfolio" className="portfolio">
      <div className="container">

        <div className="section-title">
          <span>My Portfolio</span>
          <h2>My Portfolio</h2>
          <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p>
        </div>

        <ul id="portfolio-flters" className="d-flex justify-content-center">
          <li data-filter="*" className="filter-active">All</li>
          <li data-filter=".filter-app">App</li>
          <li data-filter=".filter-card">Card</li>
          <li data-filter=".filter-web">Web</li>
        </ul>

        {
          items && items.map((item,index)=>{
            return(
              <div className="row portfolio-container" key={index}>


                  <div className="col-lg-4 col-md-6 portfolio-item filter-app" >
                    <div className="portfolio-img"><img src={item.image} className="img-fluid" alt="" /></div>
                    <div className="portfolio-info">
                      <h4>{item.header}</h4>
                      <p>{item.title}</p>
                      <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 1"><i className="bx bx-plus"></i></a>
                      <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                    <div className="portfolio-img"><img src={item.image_1} className="img-fluid" alt="" /></div>
                    <div className="portfolio-info">
                      <h4>{item.header_1}</h4>
                      <p>{item.title_1}</p>
                      <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 3"><i className="bx bx-plus"></i></a>
                      <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                    <div className="portfolio-img"><img src={item.image_2} className="img-fluid" alt="" /></div>
                    <div className="portfolio-info">
                      <h4>{item.header_2}</h4>
                      <p>{item.titl_2}</p>
                      <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 2"><i className="bx bx-plus"></i></a>
                      <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                    <div className="portfolio-img"><img src={item.image_3} className="img-fluid" alt="" /></div>
                    <div className="portfolio-info">
                      <h4>{item.header_3}</h4>
                      <p>{item.title_1}</p>
                      <a href="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 2"><i className="bx bx-plus"></i></a>
                      <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                    <div className="portfolio-img"><img src={item.image_4} className="img-fluid" alt="" /></div>
                    <div className="portfolio-info">
                      <h4>{item.header_4}</h4>
                      <p>{item.title_4}</p>
                      <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 2"><i className="bx bx-plus"></i></a>
                      <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                    <div className="portfolio-img"><img src={item.image_5} className="img-fluid" alt="" /></div>
                    <div className="portfolio-info">
                      <h4>{item.header_5}</h4>
                      <p>{item.title_5}</p>
                      <a href="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 3"><i className="bx bx-plus"></i></a>
                      <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                    <div className="portfolio-img"><img src={item.image_6} className="img-fluid" alt="" /></div>
                    <div className="portfolio-info">
                      <h4>{item.header_6}</h4>
                      <p>{item.title_6}</p>
                      <a href="assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 1"><i className="bx bx-plus"></i></a>
                      <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                    <div className="portfolio-img"><img src={item.image_7} className="img-fluid" alt="" /></div>
                    <div className="portfolio-info">
                      <h4>{item.header_7}</h4>
                      <p>{item.title_7}</p>
                      <a href="assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 3"><i className="bx bx-plus"></i></a>
                      <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                    <div className="portfolio-img"><img src={item.image_8} className="img-fluid" alt="" /></div>
                    <div className="portfolio-info">
                      <h4>{item.header_8}</h4>
                      <p>{item.title_8}</p>
                      <a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 3"><i className="bx bx-plus"></i></a>
                      <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                    </div>
                  </div>

                </div>

            )
          })
        }

        <div className="row portfolio-container">

          {/* <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-img"><img src="assets/img/portfolio/portfolio-1.jpg" className="img-fluid" alt="" /></div>
            <div className="portfolio-info">
              <h4>App 1</h4>
              <p>App</p>
              <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 1"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div> */}

          {/* <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-img"><img src={items[1].image} className="img-fluid" alt="" /></div>
            <div className="portfolio-info">
              <h4>{items[1].header}</h4>
              <p>{items[1].title}</p>
              <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 3"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-img"><img src={items[2].image} className="img-fluid" alt="" /></div>
            <div className="portfolio-info">
              <h4>{items[2].header}</h4>
              <p>{items[2].title}</p>
              <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 2"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-img"><img src={items[3].image} className="img-fluid" alt="" /></div>
            <div className="portfolio-info">
              <h4>{items[3].header}</h4>
              <p>{items[3].title}</p>
              <a href="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 2"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-img"><img src={items[4].header} className="img-fluid" alt="" /></div>
            <div className="portfolio-info">
              <h4>{items[4].header}</h4>
              <p>{items[4].title}</p>
              <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 2"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-img"><img src={items[5].image} className="img-fluid" alt="" /></div>
            <div className="portfolio-info">
              <h4>{items[5].header}</h4>
              <p>{items[5].title}</p>
              <a href="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 3"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-img"><img src={items[6].image} className="img-fluid" alt="" /></div>
            <div className="portfolio-info">
              <h4>{items[6].header}</h4>
              <p>{items[6].title}</p>
              <a href="assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 1"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-img"><img src={items[7].image} className="img-fluid" alt="" /></div>
            <div className="portfolio-info">
              <h4>{items[7].header}</h4>
              <p>{items[7].header}</p>
              <a href="assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 3"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-img"><img src={items[8].image} className="img-fluid" alt="" /></div>
            <div className="portfolio-info">
              <h4>{items[8].header}</h4>
              <p>{items[8].title}</p>
              <a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 3"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div> */}

        </div>

      </div>
    </section>
    </div>
  )
}

export default Portfolio
