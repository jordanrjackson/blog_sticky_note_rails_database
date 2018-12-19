import React from "react";
import Blog from "./Blog";
import { connect, } from "react-redux";

const BlogList = ({ blogs }) => (
  <ul style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
    {
      blogs.map( blog => (
        <Blog key={blog.id} {...blog} />
      ))
    }
  </ul>
)

const mapStateToProps = (state) => {
  return { blogs: state.blogs, };
}

export default connect(mapStateToProps)(BlogList);
