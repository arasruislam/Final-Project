import recoImg1 from "../../../assets/slider/slide1.jpg";
import recoImg2 from "../../../assets/slider/slide2.jpg";
import recoImg3 from "../../../assets/slider/slide3.jpg";

const ChefRecommend = () => {
  return (
    <div className="flex justify-between flex-wrap items-center">
      {/* First Item */}
      <div className="card w-80 bg-[#F3F3F3] rounded-none">
        <figure>
          <img
            src={recoImg1}
            className="w-full object-cover h-72"
            alt="Shoes"
          />
        </figure>
        <div className="card-body py-4 items-center text-center">
          <h2 className="card-title">Caeser Salad</h2>
          <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-outline text-[#BB8506] border-[#BB8506] border-0 border-b-4 hover:bg-[#1F2937] hover:text-[#BB8506]">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      {/* Second Item */}
      <div className="card w-80 bg-[#F3F3F3] rounded-none">
        <figure>
          <img
            src={recoImg2}
            className="w-full object-cover h-72"
            alt="Shoes"
          />
        </figure>
        <div className="card-body py-4 items-center text-center">
          <h2 className="card-title">Caeser Salad</h2>
          <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-outline text-[#BB8506] bg-[#1F2937] border-[#BB8506] border-0 border-b-4 hover:bg-[#F3F3F3] hover:border-[#BB8506] hover:text-[#BB8506]">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      {/* Third Item */}
      <div className="card w-80 bg-[#F3F3F3] rounded-none">
        <figure>
          <img
            src={recoImg3}
            className="w-full object-cover h-72"
            alt="Shoes"
          />
        </figure>
        <div className="card-body py-4 items-center text-center">
          <h2 className="card-title">Caeser Salad</h2>
          <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-outline text-[#BB8506] border-[#BB8506] border-0 border-b-4 hover:bg-[#1F2937] hover:text-[#BB8506]">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefRecommend;
