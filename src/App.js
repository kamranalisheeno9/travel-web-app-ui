import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from './pages/homepage'
import AboutPage from './pages/aboutpage'
import TourProcedure from './pages/tourprocedure'
import CustomerInquiry from './pages/customerinquiry'
import ContactUs from './pages/contactus'
import Policies from './pages/policies'
import BookTour from './pages/booktour'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route path="/booktour">
          
          <BookTour />
        </Route>
        <Route path="/policies">
          
          <Policies />
        </Route>
        <Route path="/contactus">
          
          <ContactUs />
        </Route>
        <Route path="/customerinquiry">
          
          <CustomerInquiry />
        </Route>
        <Route path="/tourprocedure">
          
          <TourProcedure />
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
