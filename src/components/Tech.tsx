import { Wrapper } from "../hoc";
import { technologies } from "../constants";
import { Ballcanvas } from ".";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((tech, index) => (
        <div key={tech.name} className="w-40 h-40 ">
          <Ballcanvas icon={tech.icon} index={index} />
        </div>
      ))}
    </div>
  );
};

export default Wrapper(Tech, "tech");
