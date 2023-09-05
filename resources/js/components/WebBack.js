import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router , Routes, Route, Redirect, Link } from "react-router-dom";
import axios from 'axios';
import Contact from './back-end/admin/pages/contact/Contact';
import Dashboard from './back-end/admin/Dashboard';
import Pricing from './back-end/admin/pages/pricing/Pricing';
import PricingEdit from './back-end/admin/pages/pricing/PricingEdit';

import Edit from './back-end/admin/pages/service/Edit';
import ServiceForm from './back-end/admin/pages/ServiceForm';
import Web from './frontend/Web';
import EditContact from './back-end/admin/pages/contact/EditContact';
import Message from './back-end/admin/pages/message/Message';
import Slider from './back-end/admin/pages/slider/Slider';
import SliderEdit from './back-end/admin/pages/slider/SliderEdit';
import SliderAdd from './back-end/admin/pages/slider/SliderAdd';
import FooterForm from './back-end/admin/pages/footer/FooterForm';
import AboutForm from './back-end/admin/pages/about/AboutForm';
import ResumeForm from './back-end/admin/pages/resume/ResumeForm';
import TestimonialForm from './back-end/admin/pages/testimonial/TestimonialForm';
import TestimonialView from './back-end/admin/pages/testimonial/TestimonialView';
import TestimonialEdit from './back-end/admin/pages/testimonial/TestimonialEdit';
import PortfolioList from './back-end/admin/pages/portfolio/PortfolioList';
import PortfolioForm from './back-end/admin/pages/portfolio/PortfolioForm';
import PortfolioEdit from './back-end/admin/pages/portfolio/PortfolioEdit';
import Login from './login/Login';
import Protected from './Protected';



function WebBack() {

    const [loggedIn, setLoggedIn] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    useEffect(() => {
        axios.get('${path}/${paths}')
          .then(response => {
            setLoggedIn(response.data.loggedIn);
            console.log(loggedIn)
          })
          .catch(error => {
            console.error(error);
          });
      }, []);

    return (
        <div>
            {/* <Web /> */}
            <Router>
                <Routes>
                    <Route path='/' element={<Web />} />

                    <Route path='/login' element={<Login />} />
                    <Route element={<Dashboard />}>
                        {/* <Route path='/dashboard' element={<Dashboard />} /> */}
                        {/* <Route path='/dashboard' element={<ServiceForm />} /> */}
                        <Route path='/dashboard' element={<Protected isLoggedIn={isLoggedIn}><ServiceForm /></Protected>} />
                        {/* <Route path='/dashboard' element={<Protected><ServiceForm /></Protected>} /> */}
                        <Route path='/service/:id' element={<Protected isLoggedIn={isLoggedIn}><Edit /></Protected> } />
                        <Route path='/pricing-index' element={<Protected isLoggedIn={isLoggedIn}><Pricing /></Protected>} />
                        <Route path='/price/:id' element={ <Protected isLoggedIn={isLoggedIn}><PricingEdit /></Protected>} />
                        <Route path='/contacts' element={ <Protected isLoggedIn={isLoggedIn}><Contact /></Protected>} />
                        <Route path='/contacts/:id' element={ <Protected isLoggedIn={isLoggedIn}><EditContact /></Protected> } />
                        <Route path='/message-list' element={ <Protected isLoggedIn={isLoggedIn}><Message /></Protected>} />
                        <Route path='/admin-slider' element={ <Protected isLoggedIn={isLoggedIn}><Slider /></Protected> } />
                        <Route path='/admin-slider/:id' element={ <Protected isLoggedIn={isLoggedIn}><SliderEdit /></Protected>}  />

                        <Route path='/admin-slider-add' element={ <Protected isLoggedIn={isLoggedIn}><SliderAdd /></Protected>} />
                        <Route path='/admin-footer-form/:id' element={<Protected isLoggedIn={isLoggedIn}><FooterForm /></Protected> } />

                        <Route path='/admin-about/:id' element={<Protected isLoggedIn={isLoggedIn}><AboutForm /></Protected>} />
                        <Route path='/admin-resume/:id' element={ <Protected isLoggedIn={isLoggedIn}><ResumeForm /></Protected>} />

                        <Route path='/admin-testimonial-form' element={<Protected isLogedIn={isLoggedIn}><TestimonialForm /></Protected>} />
                        <Route path='/admin-testimonial-view' element={<Protected isLogedIn={isLoggedIn}><TestimonialView /></Protected>} />
                        <Route path='/admin-testimonials/:id' element={<Protected isLogedIn={isLoggedIn}><TestimonialEdit /></Protected>} />

                        <Route path='/admin-portfolio-list' element={<Protected isLogedIn={isLoggedIn}><PortfolioList /></Protected>} />
                        <Route path='/admin-portfolio-form' element={<Protected isLogedIn={isLoggedIn}><PortfolioForm /></Protected>} />
                        <Route path='/admin-portfolio/:id' element={<Protected isLogedIn={isLoggedIn}><PortfolioEdit /></Protected>} />


                    </Route>

                    {/* <Route path='/dashboardform' element={<ServiceForm />} /> */}
                    {/* <Route path='/dashboard' element={<Dashboard />}></Route> */}
                </Routes>
            </Router>
        </div>
    );
}

export default WebBack;

if (document.getElementById('webback')) {
    ReactDOM.render(<WebBack />, document.getElementById('webback'));
}
