import img1 from "../../../assets/home/chef-service.jpg";

const SimpleBanner = () => {
  return (
    <div
      className="hero h-[360px] lg:h-[572px] object-cover"
      style={{
        backgroundImage: `url(${img1})`,
      }}
    >
      <div className="hero-content w-full lg:max-w-6xl lg:py-24 mx-20 text-center bg-white">
        <div>
          <h1 className="mb-5 text-5xl font-normal font-cinzel">Bistro Boss</h1>
          <p className="mb-5 px-2 sm:px-20 md:px-24 lg:px-32 xl:px-36">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, libero accusamus laborum deserunt ratione dolor
            officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
            nihil iusto ducimus incidunt quibusdam nemo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SimpleBanner;
