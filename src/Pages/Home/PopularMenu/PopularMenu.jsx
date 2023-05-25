import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <div className="grid grid-cols-2 gap-6">
      {popular.map((item) => (
        <MenuItem key={item._id} item={item}></MenuItem>
      ))}
    </div>
  );
};

export default PopularMenu;
