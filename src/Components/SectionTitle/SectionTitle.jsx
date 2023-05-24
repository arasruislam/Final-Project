
const SectionTitle = ({Title, SubTitle}) => {
    return (
      <div className="mb-8 grid place-items-center">
        <h4 className=" text-[#D99904] italic border-b-2 pb-2">
          ---{SubTitle}---
        </h4>
        <h1 className="text-4xl border-b-2 py-4 uppercase">{Title}</h1>
      </div>
    );
};

export default SectionTitle;