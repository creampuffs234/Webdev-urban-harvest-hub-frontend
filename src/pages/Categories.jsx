import Card from "../Components/Card";
import Catogoryinformation from "../Data/catogorystuff";

const Categories = () => {
    return (
        <div className="pt-24">
            {/* Hero */}
            <section>
                <img
                    className="w-full border-4 border-white"
                    src="/categories.jpg"
                    alt=""
                />
            </section>

            {/* Cards */}
            {/* Cards */}
            <section className="bg-chelsea-cucumber py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {Catogoryinformation.map((item) => (
                        <Card key={item.path} CatogoryDetails={item} />
                    ))}
                </div>
            </section>

        </div >
    );
};

export default Categories;
