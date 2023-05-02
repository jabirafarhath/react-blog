import { Link } from "react-router-dom";
const BlogList = ({ blogs, title }) => {
  //   const blogs = props.blogs;

  

  return (
    <div>
      <h2 className="text-3xl text-teal-900 mb-6 underline">{title}</h2>
      {blogs.map((blog) => (
        <div
          className="blog-preview mb-2 ml-2 bg-gray-200 p-3 rounded-md justify-between flex"
          key={blog.id}
        >
          <Link to={`/blog/${blog.id}`}>
            <div>
              <h2 className="text-2xl text-teal-700">{blog.title}</h2>
              <p className="text-gray-500">Written by {blog.author}</p>
            </div>
          </Link>
          <div>
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
