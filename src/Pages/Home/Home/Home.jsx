import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import SimpleBanner from "../Extra/SimpleBanner";
import PopularMenu from "../PopularMenu/PopularMenu";

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

      {/* Menu */}
      <section className="mb-20">
        <SectionTitle Title={"FROM OUR MENU"} SubTitle={"Check it out"} />
        <PopularMenu />
      </section>
    </div>
  );
};

export default Home;
