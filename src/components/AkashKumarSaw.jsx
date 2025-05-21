import { content } from "../constant/Content";
const AkashKumarSaw = () => {
  const { AkashKumarSaw } = content;

  return (
    <section id="home" className="overflow-hidden">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10"
        >
          <h1 className="rotate-90 absolute top-[30%] right-[-15%] text-[#EAF2FA]">
            {AkashKumarSaw.firstName}{" "}
            <span className="text-dark_primary">{AkashKumarSaw.LastName}</span>
          </h1>
        </div>

        {/* first col */}
        <div className="pb-16 pt-5" data-aos="fade-down">
          <h2>{AkashKumarSaw.title}</h2>
          <h2>{AkashKumarSaw.subTitle}</h2>
          <br />
          <div className="flex justify-end">
            <a href="#contact">
              <button className="btn mx-2">{AkashKumarSaw.btnText}</button>
            </a>
            <a href="https://docs.google.com/document/d/1Uvan5DjPGbZMYNjOb4WUUtWCG-j9toSpEBdO28iSUFk/" target="_blank">
              <button className="btn mx-2">Resume</button>
            </a>
          </div>
          <div className="flex flex-col gap-10 mt-10">
            {AkashKumarSaw.akash_content.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 300}
                className={`flex items-center w-80 gap-5
            ${i === 1 && " flex-row-reverse text-right"}  `}
              >
                <h3>{content.count}</h3>
                <p>{content.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* sec col */}
        <div className="md:h-[30rem] h-96">
          <img
            src={AkashKumarSaw.image}
            data-aos="slide-up"
            alt="..."
            className="h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AkashKumarSaw;
