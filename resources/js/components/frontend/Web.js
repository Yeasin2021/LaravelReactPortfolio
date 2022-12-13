
import React from 'react'
import About from './elements/About';
import ContactMessage from './elements/ContactMessage';
import Contacts from './elements/Contacts';
import Header from './elements/Header';
import Portfolio from './elements/Portfolio';

import Pricing from './elements/Pricing';
import Resume from './elements/Resume';
import Service from './elements/Service';
import Testimonial from './elements/Testimonial';

const Web = () => {
  return (
    <div>
        <Header />
        <div className='main'>
            <About />
            <Resume />
            <Service />
            <Testimonial />
            <Portfolio />
            <Pricing />
            <Contacts />
        </div>
    </div>
  )
}

export default Web

if (document.getElementById('web')) {
    ReactDOM.render(<Web />, document.getElementById('web'));
}
