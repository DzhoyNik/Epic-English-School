import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Auth from './component/auth';

class App extends React.Component {
    render() {
        return(
            <Router>
                <Routes>
                    <Route path="/" element={<Auth />} />
                </Routes>
            </Router>
        )
    }
}

export default App;