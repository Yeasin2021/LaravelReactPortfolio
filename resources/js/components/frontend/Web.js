import React from 'react'

const Web = () => {
  return (
    <div>
        <h1>Hello React</h1>
    </div>
  )
}

export default Web

if (document.getElementById('web')) {
    ReactDOM.render(<Web />, document.getElementById('web'));
}
