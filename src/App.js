import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from './pages/homepage'
import AboutPage from './pages/aboutpage'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route path="/about">
          
          <AboutPage />
        </Route>

        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    
    </Router>
  );
}

export default App;
