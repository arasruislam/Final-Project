import featuredImg from "../../../assets/home/featured.jpg";
import moment from "moment";

const Featured = () => {
  return (
    <div className="flex items-center gap-16">
      <img
        src={featuredImg}
        alt="Featured Image"
        className="h-[400px] w-[648px] object-cover"
      />
      <div>
        <h5 className="text-lg font-thin text-white">
          {moment().format("LL")}
        </h5>
        <h3 className="text-xl text-white">WHERE CAN I GET SOME?</h3>
        <p className=" text-gray-200 mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
          voluptate facere, deserunt dolores maiores quod nobis quas quasi.
          Eaque repellat recusandae ad laudantium tempore consequatur
          consequuntur omnis ullam maxime tenetur.
        </p>
        <button className="btn btn-outline text-white border-white border-0 border-b-4 hover:bg-[#1F2937] hover:text-[#BB8506] mt-8">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Featured;
