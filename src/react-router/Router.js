import { BrowserRouter , Routes , Route , Link} from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import User from "./components/User";
import OldBooks from "./components/OldBook";
import NewBook from "./components/NewBook";
import Login from "./components/Login";
import DashBoard from "./components/DashBoaed";

// Here '/' refers default url and elementused to call the component without refreshing using router 
// Instead of using anger <a> tag here use Link in routers

// /user/:id here '/:' refers something getting from user, id is parameter

// many link can handle one router through using parameters

function Router() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact-us'>Contact US</Link></li>
            <li><Link to='/user/1'>User 1</Link></li>
            <li><Link to='/user/2'>User 2</Link></li>
            <li><Link to='/user/3'>User 3</Link></li>
            <li><Link to='/books/old-books'>Old Books</Link></li>
            <li><Link to='/books/new-books'>New Books</Link></li>
            <li><Link to='/login'>Login</Link></li>
          </ul>
          <Routes>
            <Route path="/" element={<Home/>} /> 
            <Route path="/about" element={<About/>} /> 
            <Route path="/contact-us" element={<Contact/>} /> 
            <Route path="/user/:id" element={<User />} /> 
            <Route path="/books">
              <Route path="old-books" element={<OldBooks />} /> 
              <Route path="new-books" element={<NewBook />} /> 
            </Route>
            <Route path="/login" element={<Login/>}/>
            <Route path="/dashboard" element={<DashBoard/>}/>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default Router;
