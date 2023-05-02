import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  
    const {data, isPending, error} = useFetch('http://localhost:8000/blogs')
  
  return (
    <div className="max-w-[50%] mx-auto ">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {data && <BlogList blogs={data} title="All Blogs" />}
    </div>
  );
};

export default Home;
