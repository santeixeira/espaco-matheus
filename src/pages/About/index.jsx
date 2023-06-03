import Experiencias from "./Experiencias";
import Honors from "./Honors";
import Main from "./Main";

const About = () => {
  return (
    <div className=" text-black mx-auto lg:h-[2160px] max-w-[1024px] pt-10">
      <Main />
      <div className="mx-auto pb-10">
        <Honors />
      </div>
      <div className="mx-auto pb-10">
        <Experiencias />
      </div>
    </div>
  );
};

export default About;
