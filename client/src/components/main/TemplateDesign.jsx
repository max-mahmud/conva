import React from "react";

const TemplateDesign = () => {
  return (
    <div>
      <div className={`grid gap-2  grid-cols-2`}>
        {[1, 2, 3, 4].map((design, i) => (
          <div key={i} className={`relative cursor-pointer group w-full `}>
            <div className={`w-full h-full block bg-[#ffffff12] rounded-md `}>
              <img className="w-full h-full rounded-md overflow-hidden" src={"/homework.png"} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplateDesign;
