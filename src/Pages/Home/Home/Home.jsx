import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import SimpleBanner from "../Extra/SimpleBanner";

const Home = () => {
  return (
    <div>
      {/* Banner */}
      <section>
        <Banner />
      </section>

      {/* Category */}
      <section className="mb-20">
        <Category />
      </section>

      {/* Banner */}
      <section className="mb-20">
        <SimpleBanner />
      </section>
    </div>
  );
};

export default Home;
