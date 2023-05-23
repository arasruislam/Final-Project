import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import SimpleBanner from "../Extra/SimpleBanner";

const Home = () => {
  return (
    <div>
      {/* Banner */}
      <section className="mb-20">
        <Banner />
      </section>

      {/* Category */}
      <section className="mb-20">
        <SectionTitle
          Title={"ORDER ONLINE"}
          SubTitle={"From 11:00am to 10:00pm"}
        />
        
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
