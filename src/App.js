import { Route, Switch } from 'react-router';
import './App.css';
import Home from './components/Home'
import About from './components/About';
import Teams from './components/Teams';
import Classes from './components/Classes';
import Pricing from "./components/Pricing";
import Subscribe from './components/Subscribe';

function App() {
  return (
    <>
  <Switch>
    <Route exact path="/" component={Home}></Route>
    <Route path="/about" component={About}></Route>
    <Route path="/teams" component={Teams}></Route>
    <Route path="/classes" component={Classes}></Route>
    <Route path="/pricing" component={Pricing}></Route>
    <Route path="/subscribe" component={Subscribe}></Route>
  </Switch>
    </>
  );
}

export default App;
