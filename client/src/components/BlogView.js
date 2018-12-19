import React from "react";
import BlogForm from "./BlogForm";
import { deleteBlog, } from "../reducers/blogs";
import { connect, } from "react-redux";
import {  Header, Image, Container, Table, Button, } from "semantic-ui-react";
import { Link, } from "react-router-dom";

class BlogView extends React.Component {
  state = { showForm: false, };

  toggleForm = () => this.setState({ showForm: !this.state.showForm, });

  handleDelete = () => {
    const { blog, dispatch, history: { push, }, } = this.props;
    dispatch(deleteBlog(blog.id));
    push("/blogs");
  }

  render() {
    const { showForm, } = this.state;
    const { blog = {}, } = this.props;

    return (
      <Container>
        <Link to="/blogs">View All Blogs</Link>
        <Button color="blue" onClick={this.toggleForm}>
          { showForm ? "Cancel" : "Edit" }
        </Button>
        <Button color="red" onClick={this.handleDelete}>
          Delete
        </Button>
        {
          showForm ? 
            <BlogForm { ...blog } closeForm={this.toggleForm} />
          :
            <div>
              <Header as="h3" textAlign="center">{blog.name}</Header>
              <Image src={blog.logo} />
              <Table definition>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell />
                    <Table.HeaderCell />
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  <Table.Row>
                    <Table.Cell>Description</Table.Cell>
                    <Table.Cell>{blog.description}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Author</Table.Cell>
                    <Table.Cell>{blog.author}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Category</Table.Cell>
                    <Table.Cell>{blog.category}</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </div>
          }
        </Container>
      )
    }
  }
  
  
const mapStateToProps = (store, props) => {
  return { blog: store.blogs.find( b => b.id === parseInt(props.match.params.id)) }
}

export default connect(mapStateToProps)(BlogView);