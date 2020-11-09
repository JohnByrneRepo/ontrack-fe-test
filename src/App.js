import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Test from './pages/Test';

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route exact path={["/", "/books"]} component={Test} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
