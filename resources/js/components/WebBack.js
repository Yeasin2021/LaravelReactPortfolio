import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router , Routes, Route, Link } from "react-router-dom";
import Web from './frontend/Web';


function WebBack() {
    return (
        <div>
            {/* <Web /> */}
            <Router>
                <Routes>
                    <Route path='/' element={<Web />}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default WebBack;

if (document.getElementById('webback')) {
    ReactDOM.render(<WebBack />, document.getElementById('webback'));
}
