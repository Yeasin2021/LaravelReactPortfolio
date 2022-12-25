import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router , Routes, Route, Link } from "react-router-dom";
import Dashboard from './back-end/admin/Dashboard';
import Pricing from './back-end/admin/pages/pricing/Pricing';
import PricingEdit from './back-end/admin/pages/pricing/PricingEdit';

import Edit from './back-end/admin/pages/service/Edit';
import ServiceForm from './back-end/admin/pages/ServiceForm';
import Web from './frontend/Web';


function WebBack() {

    return (
        <div>
            {/* <Web /> */}
            <Router>
                <Routes>
                    <Route path='/' element={<Web />} />
                    <Route element={<Dashboard />}>
                        {/* <Route path='/dashboard' element={<Dashboard />} /> */}
                        <Route path='/dashboard' element={<ServiceForm />} />
                        <Route path='/service/:id' element={<Edit />} />
                        <Route path='/pricing-index' element={<Pricing />} />
                        <Route path='/price/:id' element={<PricingEdit />} />
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
