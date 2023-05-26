import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, img, title }) => {
  return (
    <>
      {title && <Cover img={img} title={title} />}

      <div className="grid grid-cols-2 gap-6 mt-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="flex justify-center my-4">
        <Link to={`/order/${title}`}>
          <button className="btn btn-outline text-[#BB8506] border-[#BB8506] border-0 border-b-4 hover:bg-[#1F2937] hover:text-[#BB8506] text-center">
            ORDER YOUR FAVOURITE FOOD
          </button>
        </Link>
      </div>
    </>
  );
};

export default MenuCategory;
