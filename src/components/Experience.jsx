import { content } from "../constant/Content";

const Experience = () => {
  const { Experience: experienceData } = content;

  return (
    <section className="min-h-fit bg-bg_light_primary" id="experience">

      <div className="md:container px-5 py-14">
        <h2 className="title" data-aos="fade-down">
          {experienceData.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {experienceData.subtitle}
        </h4>
        <br />

        <div className="relative wrap overflow-hidden p-10 h-full">

          <div
            className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border hidden lg:block"
            style={{ left: "50%" }}
          ></div>

          <div
            className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border lg:hidden"
            style={{ left: "15px" }}
          ></div>

          {experienceData.experience_content.map((job, i) => (
            <div
              className={`mb-8 flex justify-between items-center w-full ${
                i % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 300}
            >
              <div className="hidden lg:block lg:w-5/12"></div>

              <div className="hidden lg:block absolute left-1/2 w-6 h-6 bg-black rounded-full -ml-3 border-4 border-black z-10"></div>

              <div
                className="w-full lg:w-5/12 p-6 rounded-lg shadow-xl bg-white"
              >

                <h3 className="mb-3 font-bold text-lg text-primary_blue">
                  {job.title}
                </h3>
                <h4 className="mb-3 font-bold text-lg text-primary_blue">
                  {job.shift}
                </h4>
                <p className="text-sm italic text-gray-500 mb-4">
                  {job.timePeriod}
                </p>
                <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                  {job.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;