import { Link } from "react-router-dom";

const Card = ({ CatogoryDetails }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-xl border-2 border-white transition-all duration-300 hover:shadow-2xl h-[500px]">
      <img
        src={CatogoryDetails.image}
        alt={CatogoryDetails.title}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Overlay with gradient for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <Link
          to={`/categories/${CatogoryDetails.path}`}
          className="block"
        >
          <h3 className="text-3xl font-bold text-white mb-3 hover:text-chelsea-cucumber transition-colors drop-shadow-md">
            {CatogoryDetails.title}
          </h3>
        </Link>
        <p className="text-gray-200 text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
          {CatogoryDetails.description}
        </p>
      </div>
    </div>
  );
};

export default Card;
