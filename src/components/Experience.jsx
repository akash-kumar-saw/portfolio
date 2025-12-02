import { content } from "../constant/Content";

const Experience = () => {
  const { Experience: experienceData } = content;

  const experienceSection = {
    title: "Experience",
    subtitle: "WHERE I'VE WORKED",
  };

  return (
    <section className="min-h-fit bg-bg_light_primary" id="experience">

      <div className="md:container px-5 py-14">
        <h2 className="title" data-aos="fade-down">
          {experienceSection.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {experienceSection.subtitle}
        </h4>
        <br />

        <div className="relative wrap overflow-hidden p-10 h-full">

          <div
            className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border"
            style={{ left: "50%" }}
          ></div>

          {experienceData.map((job, i) => (
            <div
              className={`mb-8 flex justify-between items-center w-full ${
                i % 2 === 0 ? "right-timeline" : "left-timeline"
              }`}
              key={job.id}
              data-aos="fade-up"
              data-aos-delay={i * 300}
            >
              <div
                className={`order-1 w-5/12 ${
                  i % 2 === 0 ? "md:text-right" : "md:text-left"
                }`}
              >
              </div>

              <div
                className={`order-1 w-5/12 p-6 rounded-lg shadow-xl ${
                  i % 2 === 0
                    ? "md:text-left bg-white"
                    : "md:text-right bg-white"
                }`}
                style={{
                  order: i % 2 === 0 ? 2 : 0,
                  marginLeft: i % 2 === 0 ? "2.5rem" : "0",
                  marginRight: i % 2 !== 0 ? "2.5rem" : "0",
                }}
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