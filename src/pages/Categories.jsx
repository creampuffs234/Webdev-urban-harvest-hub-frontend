import Card from "../Components/Card";
import Catogoryinformation from "../Data/catogorystuff";

const Categories = () => {
    return (
        <>
            {/* Hero */}
            <section>
                <img
                    className="w-full border-4 border-white"
                    src="/categories.jpg"
                    alt=""
                />
            </section>

            {/* Cards */}
            <section
                className="

          bg-chelsea-cucumber
          grid grid-cols-2
          md:grid-cols-2
          gap-20
          px-20 py-20
          
          ml-10
          
        "
            >

                {Catogoryinformation.map((item) => (
                    <Card key={item.path} CatogoryDetails={item} />
                ))}
            </section>
        </>
    );
};

export default Categories;
