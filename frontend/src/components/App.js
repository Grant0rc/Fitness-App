
import './App.css';
import Dashboard from './Dashboard.js';
import Browse from './Browser';
import Program from './Program.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import { ThemeProvider } from 'styled-components';
//import Theme from './components/Theme';

function App() {
  return (
    <Router>
    <div>
      <Route exact path="/" component={Dashboard}/>
      <Route exact path="/Browse" component={Browse}/>
      <Route exact path="/Program" component={Program}/>
    </div>
    </Router>
  );
}

export default App;
