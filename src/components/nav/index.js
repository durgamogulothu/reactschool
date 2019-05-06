import React, { Component } from "react";
import {Link,Route,BrowserRouter} from "react-router-dom";
import Home from "../home";
import Stuff from "../blog";
import Contact from "../contact";
import Register from "../register";
import Common from "../common";
import Suspend from "../suspend";

class Nav extends Component {
  render() {
    return (
        <BrowserRouter>
        <div>
            <h1>React Router Simple Starter</h1>
            <ul className="header">
                <li key="home"><Link exact to="/">Home</Link> </li>
                <li key="register"><Link to="/register">Register</Link></li>
                <li key="common"><Link to="/common">Common Students</Link></li>
                <li key="suspend"><Link to="/suspend">Suspend Student</Link></li>
                <li key="blog"><Link to="/blog">Blog</Link></li>
                <li key="contact"><Link to="/contact">Contact</Link></li>
            </ul>
            <div className="content">
             
                <Route path="/" component={Home} />
                <Route path="/register" component={Register} />
                <Route path="/common" component={Common} />
                <Route path="/suspend" component={Suspend} />
                <Route path="/blog" component={Stuff} />
                <Route path="/contact" component={Contact} />
                
            </div>
        </div>
        </BrowserRouter>
    );
  }
}

export default Nav;