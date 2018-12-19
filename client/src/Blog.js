import React, { Fragment, } from 'react';
import Home from "./components/Home";
import NoMatch from "./components/NoMatch";
import FetchBlogs from "./components/FetchBlogs";
import Navbar from "./components/Navbar";
import AccountProfile from "./components/AccountProfile";
import { Container, } from "semantic-ui-react";
import { Route, Switch, } from "react-router-dom";

const Blog = () => (
  <Fragment>
    <Navbar />
    <Container>  
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path ="/blogs" component={FetchBlogs} />
        <Route component={NoMatch} />
        <Route exact path="/account/profile" component={AccountProfile} />
      </Switch>
    </Container>
  </Fragment>
);
export default Blog;
