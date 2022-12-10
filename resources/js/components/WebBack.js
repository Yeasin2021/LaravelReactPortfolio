import React from 'react';
import ReactDOM from 'react-dom';
import Web from './frontend/Web';


function WebBack() {
    return (
        <div>
            <Web />
        </div>
    );
}

export default WebBack;

if (document.getElementById('webback')) {
    ReactDOM.render(<WebBack />, document.getElementById('webback'));
}
