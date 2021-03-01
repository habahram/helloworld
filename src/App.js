import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import NavigationBar from './components/NavigationBar';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <HashRouter>
      <Header />
      <NavigationBar />
      <Switch>
         <Route path="/home" component={Home}/>
         <Route path="/login" component={Login}/>
      </Switch>
      <Footer />
    </HashRouter>
  );
}

export default App;
