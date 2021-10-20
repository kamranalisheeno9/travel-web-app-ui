import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from './pages/homepage'
import AboutPage from './pages/aboutpage'
import TourPage from './pages/tourmenu'
import TourProcedure from './pages/tourprocedure'
import CustomerInquiry from './pages/customerinquiry'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route path="/customerinquiry">
          
          <CustomerInquiry />
        </Route>
        <Route path="/tourprocedure">
          
          <TourProcedure />
        </Route>
        <Route path="/tourmenu">
          
          <TourPage />
        </Route>
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
