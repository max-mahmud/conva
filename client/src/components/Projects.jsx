import React from "react";

const Projects = () => {
  return (
    <div className="h-[88vh] overflow-x-auto flex justify-start items-start scrollbar-hide w-full">
      <div className={"grid grid-cols-2 gap-2 mt-5 w-full"}>
        {[1, 2, 3, 4].map((d, i) => (
          <div key={i} className="w-full h-[90px] overflow-hidden rounded-sm cursor-pointer">
            <img className="w-full h-full object-fill" src={"/homework.png"} alt="image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
