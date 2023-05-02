import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="max-w-[50%] mx-auto">
      <div>
        <h2 className="text-3xl">Uh Oh☹️!</h2>
        <p>The page you are looking for doesn't exist.</p>
        <Link to='/' className="underline">Back</Link>
      </div>
    </div>
  );
};

export default NotFound;
