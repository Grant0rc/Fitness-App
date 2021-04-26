
import './App.css';
import Dashboard from './Dashboard.js';
import Browse from './Browser';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div>
      <Route exact path="/" component={Dashboard}/>
      <Route exact path="/Browse" component={Browse}/>
    </div>
    </Router>
  );
}

export default App;
