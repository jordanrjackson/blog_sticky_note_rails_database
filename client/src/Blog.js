import React, { Fragment, } from 'react';
import Navbar from "./components/Navbar";
import AccountProfile from "./components/AccountProfile";
import { Container, Header, } from "semantic-ui-react";
import { Route, Switch, } from "react-router-dom";
import BlogForm from "./components/BlogForm";
import BlogList from "./components/BlogList";
import Footer from "./components/Footer";

const Blog = () => (
  <Fragment>
    <Navbar />
    <Container>
      <Switch>
        <Route 
          exact 
          path="/"
          render={ () => <Header as="h1">Home</Header> }
        />
        <Route 
          exact 
          path="/account/profile"
          // component={AccountProfile}
          render={ () => <AccountProfile /> }
        />
        <Route 
          exact 
          path="/components/BlogForm"
          // component={BlogForm}
          render={ () => <BlogForm /> }
        />
        <Route 
          exact 
          path="/components/BlogList"
          // component={BlogList}
          render={ () => <BlogList /> }
        />
        <Route 
          exact 
          path="/components/Footer"
          // component={Footer}
          render={ () => <Footer /> }
        />
      </Switch>
    </Container>
  </Fragment>
)

export default Blog;
