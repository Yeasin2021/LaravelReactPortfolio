import React from 'react'
import About from './elements/About';
import Header from './elements/Header';

import Pricing from './elements/Pricing';
import Resume from './elements/Resume';
import Service from './elements/Service';

const Web = () => {
  return (
    <div>
        {/* <Header /> */}
        <About />
        <Resume />
        <Service />
        <Pricing />
    </div>
  )
}

export default Web

if (document.getElementById('web')) {
    ReactDOM.render(<Web />, document.getElementById('web'));
}
