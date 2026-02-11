import { Link } from 'react-router-dom';

const Navbar = () => {
  return (

    <div className="flex justify-end w-full bg-transparent">


      <nav className="fixed top-0 w-full text-Atlantis  shadow-xl z-[100] h-[7vh] flex items-center  justify-center bg-black/5 border-b-2 backdrop-blur-sm helvetica">
        <div className="flex space-x-24 border-2 border-chelsea-cucumber rounded-xl bg-oreyelo py-1 px-2 h-[5vh]">
          <Link to="/" className="hover:bg-chelsea-cucumber hover:text-white px-5 rounded-xl font-bold text-3xl transition-all">Home</Link>
          <Link to="/categories" className="hover:bg-chelsea-cucumber hover:text-white px-5 rounded-xl font-bold text-3xl transition-all ">Categories</Link>
          <Link to="/master" className="hover:bg-chelsea-cucumber hover:text-white px-5 rounded-xl font-bold text-3xl transition-all">Master</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;