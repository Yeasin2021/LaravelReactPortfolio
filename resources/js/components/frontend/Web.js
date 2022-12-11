import React from 'react'
import About from './elements/About';

import Pricing from './elements/Pricing';

const Web = () => {
  return (
    <div>
        <About />
        <Pricing />
    </div>
  )
}

export default Web

if (document.getElementById('web')) {
    ReactDOM.render(<Web />, document.getElementById('web'));
}
