import React from "react";
import { connect, } from "react-redux";
import { updateBlog, addBlog, } from "../reducers/blogs";
import { Form, } from "semantic-ui-react";

class BlogForm extends React.Component {
  initialState = {
    name: "",
    description: "",
    category: "",
    author: "",
  };
  
  state = {...this.initialState};

  componentDidMount() {
    if (this.props.id)
      this.setState({ ...this.props, });
  }

  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({ [name]: value, });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const blog = { ...this.state, };
    const { closeForm, dispatch, } = this.props;
    const func = this.props.id ? updateBlog : addBlog;
    dispatch(func(blog));
    closeForm();
  }

  render() {
    const { name, description, category, author, } = this.props;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name="name"
          required
          defaultValue={name}
          onChange={this.handleChange}
          label="Name"
        />
        <Form.Input
          name="description"
          defaultValue={description}
          onChange={this.handleChange}
          label="Description"
        />
        <Form.Input
          name="category"
          defaultValue={category}
          onChange={this.handleChange}
          label="Category"
        />
        <Form.Input
          name="author"
          defaultValue={author}
          onChange={this.handleChange}
          label="Author"
        />
        <Form.Button>Save</Form.Button>
      </Form>
    )
  }
}

export default connect()(BlogForm);