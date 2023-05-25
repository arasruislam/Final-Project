import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefRecommend from "../ChefRecommend/ChefRecommend";
import CallUs from "../Extra/CallUs";
import SimpleBanner from "../Extra/SimpleBanner";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonial from "../Testimonial/Testimonial";
import featuredImg from "../../../assets/home/featured.jpg";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      {/* Dynamic Page Title */}
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>

      
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

      {/* Simple Banner */}
      <section className="mb-20">
        <SimpleBanner />
      </section>

      {/* popular Menu */}
      <section className="mb-20">
        <SectionTitle Title={"FROM OUR MENU"} SubTitle={"Check it out"} />
        <PopularMenu />
      </section>

      {/* Call Us */}
      <section className="mb-20">
        <CallUs />
      </section>

      {/* Chef Recommend */}
      <section className="mb-20">
        <SectionTitle Title={"CHEF RECOMMENDS"} SubTitle={"Should Try"} />
        <ChefRecommend />
      </section>

      {/* Chef Recommend */}
      <section
        className="mb-20 w-full bg-fixed"
        style={{ backgroundImage: `url(${featuredImg})` }}
      >
        <div className="px-24 py-16 bg-slate-900 bg-opacity-50">
          <SectionTitle Title={"FROM OUR MENU"} SubTitle={"Check it out"} />
          <Featured />
        </div>
      </section>

      {/* Testimonial */}
      <section className="mb-20">
        <SectionTitle
          Title={"TESTIMONIALS"}
          SubTitle={"What Our Client Says"}
        />
        <Testimonial />
      </section>
    </div>
  );
};

export default Home;
