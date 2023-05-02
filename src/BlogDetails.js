import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();

  const url = 'http://localhost:8000/blogs/'+id;
  const { data: blog, isPending, error } = useFetch(url);

  const navigate = useNavigate();
  const handleDelete = (id) => {

    fetch("http://localhost:8000/blogs/" + id, {
      method: "DELETE",
    }).then((res) => {
      if(res.ok){
        console.log("object deleted");
        navigate('/')
      }else{
        console.log("Delete request failed");
      }
    });
}

  return (
    <div className="max-w-[50%] mx-auto">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <div>
          <h2 className="text-2xl mt-3">{blog.title}</h2>
          <p className="text-gray-400 text-sm mb-2">Written by {blog.author}</p>
          <p>{blog.body}</p>
          <div className="my-8">
        <button onClick={()=>handleDelete(blog.id)} className="px-2 py-1 bg-teal-200 rounded text-red-700">Delete</button>
      </div>
        </div>
        
      )}
      
    </div>
  );
};

export default BlogDetails;
