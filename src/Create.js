import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("Jabira");
  const [body, setBody] = useState("");

  const [isPending, setIsPending] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    // console.log(blog);

    setIsPending(true);

    fetch("http://localhost:8000/blogs/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new blog added");
      setIsPending(false);
      navigate("/");
    });
  };

  return (
    <div className="create">
      <div className="max-w-[50%] mx-auto ">
        <div className="bg-slate-100 p-8 rounded-lg">
          <h1 className="text-2xl mb-3">Add a new blog</h1>
          <form action="" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="" className="">
                Blog Title
              </label>
              <input
                type="text"
                required
                className=" border-2 border-gray-500 rounded form-input w-full p-2 mt-2"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="">Blog Body</label>
              <textarea
                type="text"
                required
                className="w-full border-2 border-gray-500 rounded p-2 mt-2"
                value={body}
                onChange={(e) => setBody(e.target.value)}
              ></textarea>
            </div>
            <div className="">
              <label htmlFor="">Blog Author</label>
              <select
                name=""
                id=""
                className="w-full border-2 border-gray-500 rounded p-2 mt-2"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              >
                <option value="Jabira">Jabira</option>
                <option value="Farhath">Farhath</option>
              </select>
            </div>
            <div className="mt-5">
              {!isPending && (
                <button className="border-2 p-2 rounded-lg bg-teal-400 border-teal-500 hover:bg-teal-500 text-indigo-900">
                  Add Blog
                </button>
              )}
              {isPending && (
                <button
                  className="border-2 p-2 rounded-lg bg-teal-400 border-teal-500 hover:bg-teal-500 text-indigo-900"
                  disabled
                >
                  Adding blog..
                </button>
              )}
            </div>
          </form>
        </div>
        <div className="preview mt-5">
          {title && <h1 className="text-xl my-3">Preview</h1>}
          <h1 className="text-3xl">{title}</h1>
          {title && (
            <p className="text-sm text-gray-400">Written by {author}</p>
          )}
          <p className="my-2">{body}</p>
        </div>
      </div>
    </div>
  );
};

export default Create;
