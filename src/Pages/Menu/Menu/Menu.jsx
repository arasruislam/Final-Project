import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import bannerBg from "../../../assets/menu/banner3.jpg";
import dessertBg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaBg from "../../../assets/menu/pizza-bg.jpg";
import saladBg from "../../../assets/menu/salad-bg.jpg";
import soupBg from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../hooks/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();

  const dessert = menu.filter((item) => item.category === "dessert");
  const offered = menu.filter((item) => item.category === "offered");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");

  return (
    <div>
      {/* Dynamic Page Title */}
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>

      {/* Main Cover */}
      <section className="mb-20">
        <Cover img={bannerBg} title={"OUR MENU"} />
      </section>

      {/* Today's offer */}
      <section className="mb-20">
        <SectionTitle Title={"Today's Offer"} SubTitle={"Don't miss"} />
        <MenuCategory items={offered} />
      </section>

      {/* Dessert Section */}
      <section className="mb-12">
        <MenuCategory title={"Dessert"} img={dessertBg} items={dessert} />
      </section>

      {/* Pizza Section */}
      <section className="mb-20">
        <MenuCategory title={"Pizza"} img={pizzaBg} items={pizza} />
      </section>

      {/* Salad Section */}
      <section className="mb-20">
        <MenuCategory title={"Salad"} img={saladBg} items={salad} />
      </section>

      {/* Cover */}
      <section className="mb-20">
        <MenuCategory title={"Soup"} img={soupBg} items={soup} />
      </section>
    </div>
  );
};

export default Menu;
