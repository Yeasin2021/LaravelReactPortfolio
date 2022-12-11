import React from 'react'
import About from './elements/About';
import Header from './elements/Header';

import Pricing from './elements/Pricing';

const Web = () => {
  return (
    <div>
        {/* <Header /> */}
        <About />
        <Pricing />
    </div>
  )
}

export default Web

if (document.getElementById('web')) {
    ReactDOM.render(<Web />, document.getElementById('web'));
}
