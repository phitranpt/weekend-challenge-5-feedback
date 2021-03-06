import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Feeling from '../Feeling/Feeling';
import Understand from '../Understand/Understand';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Submission from '../Submission/Submission';
import Admin from '../Admin/Admin';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={Feeling} />
          <Route path ="/1" component={Understand} />
          <Route path ="/2" component={Support} />
          <Route path ="/3" component={Comments} />
          <Route path ="/4" component={Submission} />
          <Route path ="/Admin" component={Admin} />
        </div>
      </Router>
    );
  }
}

export default App;
