//import linktag
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" p-6 navbar ">
      <div className="flex justify-around ">
        
        <div className=" text-3xl text-teal-900">
            The Journal
        </div>
        <div className=" text-xl text-teal-600">
            <Link to="/" className="mx-4">Home</Link>
            <Link to="/create" className="mx-4">New Blog</Link>
            
        </div>
      </div>
    </div>
  );
};

export default Navbar;
