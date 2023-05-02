import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    //fires this function after every render.ie, if we delete a blog the state changes and this method is called.
    //settimeout is just to see the fetch working.
    fetch(url,)
      .then((res) => {
        // console.log(res);
        //handling errors
        if (!res.ok) {
          throw Error("Could not fetch data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        // console.log(err.message);
        if (err.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          setError(err.message);
          setIsPending(false);
        }
      });
    return () => new AbortController.abort();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
