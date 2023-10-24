
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/pages/Login';
import Register from './components/pages/Register';



function App() {
  return (
    <Router>
    <Switch>
      <Route path="/register">
        <Register/>
      </Route>
      <Route path="/">
        <Login />
      </Route>
    </Switch>
  </Router>
  );
}

export default App;
