import { Link } from 'react-router-dom';

const Navbar = () => {
  return (

    <div className="flex justify-end w-full bg-transparent">


      <nav className="fixed top-0 w-full text-Atlantis  shadow-xl z-[100] h-[7vh] flex items-center  justify-center bg-black/5 border-b-2 backdrop-blur-sm helvetica">
        <div className="flex space-x-24">
          <Link to="/" className="  bg-black hover:bg-chelsea-cucumber hover:text-white px-5 rounded-full font-bold text-3xl transition-all p-2">Home</Link>
          <Link to="/categories" className="bg-black hover:bg-chelsea-cucumber hover:text-white px-5 rounded-full font-bold text-3xl transition-all p-2">Categories</Link>
          <Link to="/master" className=" bg-black hover:bg-chelsea-cucumber hover:text-white px-5 rounded-full font-bold text-3xl transition-all p-2 shadow-[4px_4px_0px_0px_rgba(oreyelo,1)]">Master</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;