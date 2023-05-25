import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import PopularMenu from "../Home/PopularMenu/PopularMenu";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import bannerBg from "../../assets/menu/banner3.jpg";
import dessertBg from "../../assets/menu/dessert-bg.jpeg";
import pizzaBg from "../../assets/menu/pizza-bg.jpg";
import saladBg from "../../assets/menu/salad-bg.jpg";
import soupBg from "../../assets/menu/soup-bg.jpg";

const Menu = () => {
  return (
    <div>
      {/* Dynamic Page Title */}
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>

      {/* Cover */}
      <section className="mb-20">
        <Cover img={bannerBg} title={"OUR MENU"} />
      </section>

      {/* Today's offer */}
      <section className="mb-20">
        <SectionTitle Title={"Today's Offer"} SubTitle={"Don't miss"} />
        <PopularMenu />
      </section>

      {/* Cover */}
      <section className="mb-20">
        <Cover img={dessertBg} title={"DESSERTS"} />
      </section>

      {/* Today's offer */}
      <section className="mb-20">
        <PopularMenu />
      </section>

      {/* Cover */}
      <section className="mb-20">
        <Cover img={pizzaBg} title={"Pizza"} />
      </section>

      {/* Today's offer */}
      <section className="mb-20">
        <PopularMenu />
      </section>

      {/* Cover */}
      <section className="mb-20">
        <Cover img={saladBg} title={"Salad"} />
      </section>

      {/* Today's offer */}
      <section className="mb-20">
        <PopularMenu />
      </section>

      {/* Cover */}
      <section className="mb-20">
        <Cover img={soupBg} title={"soup"} />
      </section>

      {/* Today's offer */}
      <section className="mb-20">
        <PopularMenu />
      </section>
    </div>
  );
};

export default Menu;
