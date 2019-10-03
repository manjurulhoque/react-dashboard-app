import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { renderRoutes } from 'react-router-config';
import routes from './routes';

class App extends Component {
    render() {
        return (
            <Router basename="/">
                {/* <BaseRouter /> */}
                {renderRoutes(routes)}
            </Router>
        );
    }
}

export default App;
