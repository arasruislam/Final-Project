const MenuItem = ({ item }) => {
  return (
    <div className="flex items-center space-x-8">
      <img
        src={item?.image}
        style={{ borderRadius: "0px 200px 200px 200px" }}
        className="w-[118px]"
        alt="Menu item image"
      />
      <div className="space-y-1">
        <h3 className="uppercase font-cinzel text-lg">
          {item?.name} ------------
        </h3>
        <p className="text-gray-600">{item?.recipe}</p>
      </div>
      <p className="text-[#BB8506]">${item?.price}</p>
    </div>
  );
};

export default MenuItem;
