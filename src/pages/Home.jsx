import { Link } from "react-router-dom";
import QuoteGenerator from "../Components/QuoteGenerator";


const Home = () => {
  return (
    <div className="animate-fade-in">
      {/* HERO IMAGE */}
      <section className="border-b-2 border-white">
        <img
          src="/Hero-home-image.webp"
          alt="Urban Harvest Hub hero image"
          className="w-full h-[60vh] sm:h-[70vh] object-cover"
          loading="lazy"
        />
      </section>

      {/* PAGE CONTENT WRAPPER */}
      <div className="px-4 sm:px-6 lg:px-12">
        {/* INTRO SECTION */}
        <section
          className="relative bg-oreyelo rounded-[2rem] text-chelsea-cucumber overflow-hidden my-12 sm:my-16 p-6 sm:p-8 lg:p-12 border-2"
          aria-labelledby="hero-heading"
        >
          <div className="max-w-xl">
            <QuoteGenerator />

            <h1
              id="hero-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-atlantis"
            >
              Urban Harvest Hub
            </h1>

            <p className="text-base sm:text-lg opacity-90 mb-8">
              Discover sustainable products, eco-friendly initiatives, and
              community-driven solutions designed for modern urban living.
            </p>

            <div className="flex justify-center sm:justify-start">
              <button className="border-2 border-white px-8 py-3 rounded-full font-bold bg-white/40 hover:bg-white hover:text-chelsea-cucumber transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* FEATURE CARDS */}
        <section
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          aria-label="Feature details"
        >
          {/* CARD 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow h-full flex flex-col">
            <div className="w-12 h-12 bg-green-100 rounded-lg mb-4 flex items-center justify-center text-chelsea-cucumber">
              🌿
            </div>
            <h3 className="text-xl font-bold mb-3">Sustainable Living</h3>
            <p className="text-gray-600 leading-relaxed flex-grow">
              Practical solutions and ideas to support environmentally
              responsible urban lifestyles.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow h-full flex flex-col">
            <div className="w-12 h-12 bg-green-100 rounded-lg mb-4 flex items-center justify-center text-chelsea-cucumber">
              🤝
            </div>
            <h3 className="text-xl font-bold mb-3">Community Hub</h3>
            <p className="text-gray-600 leading-relaxed flex-grow">
              Connect with local communities through workshops, events, and
              shared sustainability goals.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow h-full flex flex-col">
            <div className="w-12 h-12 bg-green-100 rounded-lg mb-4 flex items-center justify-center text-chelsea-cucumber">

            </div>
            <h3 className="text-xl font-bold mb-3">Eco Products</h3>
            <p className="text-gray-600 leading-relaxed flex-grow">
              Browse eco-friendly products designed and curated by our urban
              community.
            </p>
            <Link
              to="/products"
              className="inline-block mt-4 font-bold text-chelsea-cucumber hover:text-black transition-colors"
            >
              View Products →
            </Link>
          </div>
        </section>

        {/* MISSION SECTION */}
        <section className="bg-white rounded-[2rem] p-6 sm:p-8 lg:p-12 border border-gray-100 flex flex-col md:flex-row items-center gap-8 lg:gap-12 mb-12">
          <div className="flex-1">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">
              Our Mission
            </h2>
            <p className="text-gray-600 mb-6">
              Urban Harvest Hub aims to empower individuals and communities to
              adopt sustainable practices through accessible digital
              experiences and eco-conscious initiatives.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li>✅ Promote sustainable living</li>
              <li>✅ Support local eco-initiatives</li>
              <li>✅ Encourage community engagement</li>
            </ul>
          </div>

          <div className="flex-1 w-full h-64 rounded-2xl overflow-hidden">
            <img
              src="/chris-barbalis-bIx15C7AnNg-unsplash-e1573584740305-768x368.jpg"
              alt="Urban sustainability showcase"
              className="w-full h-full object-cover rounded-2xl transition-transform duration-300 hover:scale-105"
              loading="lazy"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
