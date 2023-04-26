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
    const [isLoggedIn, setIsLoggedIn] = useState(false);
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
                        <Route path='/dashboard' element={<ServiceForm />} />
                        {/* <Route path='/dashboard' element={<Protected isLoggedIn={isLoggedIn}><ServiceForm /></Protected>} /> */}
                        {/* <Route path='/dashboard' element={<Protected><ServiceForm /></Protected>} /> */}
                        <Route path='/service/:id' element={<Edit />} />
                        <Route path='/pricing-index' element={<Pricing />} />
                        <Route path='/price/:id' element={<PricingEdit />} />
                        <Route path='/contacts' element={<Contact />} />
                        <Route path='/contacts/:id' element={<EditContact />} />
                        <Route path='/message-list' element={<Message />} />
                        <Route path='/admin-slider' element={<Slider />} />
                        <Route path='/admin-slider/:id' element={<SliderEdit />} />

                        <Route path='/admin-slider-add' element={<SliderAdd />} />
                        <Route path='/admin-footer-form/:id' element={<FooterForm />} />

                        <Route path='/admin-about/:id' element={<AboutForm />} />
                        <Route path='/admin-resume/:id' element={<ResumeForm />} />

                        <Route path='/admin-testimonial-form' element={<TestimonialForm />} />
                        <Route path='/admin-testimonial-view' element={<TestimonialView />} />
                        <Route path='/admin-testimonials/:id' element={<TestimonialEdit />} />

                        <Route path='/admin-portfolio-list' element={<PortfolioList />} />
                        <Route path='/admin-portfolio-form' element={<PortfolioForm />} />
                        <Route path='/admin-portfolio/:id' element={<PortfolioEdit />} />


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
