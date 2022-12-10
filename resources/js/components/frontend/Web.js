import React from 'react'
import Pricing from './elements/Pricing';

const Web = () => {
  return (
    <div>
        <Pricing />
    </div>
  )
}

export default Web

if (document.getElementById('web')) {
    ReactDOM.render(<Web />, document.getElementById('web'));
}
