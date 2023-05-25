import { Parallax } from "react-parallax";

const Cover = ({ img, title }) => {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={img}
      bgImageAlt="the cover"
      strength={-200}
    >
      <div className="hero h-[700px]">
        <div className="hero-content bg-black bg-opacity-60 text-center text-neutral-content px-20 py-12">
          <div className="max-w-lg">
            <h1 className="mb-5 text-6xl font-bold uppercase font-cinzel ">
              {title}
            </h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
