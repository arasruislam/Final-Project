const FoodCard = ({ item }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl rounded-none">
      <figure>
        <img src={item?.image} alt="Shoes" />
      </figure>
      <p className="bg-slate-800 text-white px-4 py-2 absolute right-0 mt-4 mr-4">
        ${item?.price}
      </p>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{item?.name}</h2>

        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline text-[#BB8506] border-[#BB8506] bg-slate-100 border-0 border-b-4 hover:bg-[#1F2937] hover:text-[#BB8506]">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
