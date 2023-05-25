import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, img, title }) => {
  return (
    <>
      {title && <Cover img={img} title={title} />}

      <div className="grid grid-cols-2 gap-6 mt-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </>
  );
};

export default MenuCategory;
