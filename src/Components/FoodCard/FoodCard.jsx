const FoodCard = ({ item }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl rounded-none">
      <figure>
        <img src={item?.image} alt="Shoes" />
      </figure>
      <p className="bg-slate-800 text-white px-4 py-2 absolute right-0 mt-4 mr-4">
        ${item?.price}
      </p>
      <div className="card-body">
        <h2 className="card-title">{item?.name}</h2>

        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
