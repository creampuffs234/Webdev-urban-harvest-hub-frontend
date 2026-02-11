import { Link } from "react-router-dom";

const Card = ({ CatogoryDetails }) => {
  return (
    <div className="relative h-[70vh]">
      <img
        src={CatogoryDetails.image}
        alt={CatogoryDetails.title}
        className="h-[60vh] shadow-2xl rounded-xl border-2"
      />

         {/* deatiled top card */}
      <div className="
        absolute bottom-6 left-6
       bg-white/80 px-6 py-6
        rounded-xl shadow-xl
        hover:bg-oreyelo
        transition-all duration-300
      ">
             <Link
          to={`/categories/${CatogoryDetails.path}`}
           className="text-5xl block transition-all duration-300"
        >
          {CatogoryDetails.title}
        </Link>

           <p>{CatogoryDetails.description}</p>
   </div>
    </div>
  );
};

export default Card;
