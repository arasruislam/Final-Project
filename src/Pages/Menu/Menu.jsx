import { Helmet } from "react-helmet-async";

const Menu = () => {
    return (
      <div>
        {/* Dynamic Page Title */}
        <Helmet>
          <title>Bistro Boss | Menu</title>
        </Helmet>
      </div>
    );
};

export default Menu;