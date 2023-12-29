import React from "react";

const Image = () => {
  return (
    <div className="grid grid-cols-2 gap-2">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((item, i) => (
        <div key={i} className="w-full h-[90px] overflow-hidden rounded-sm cursor-pointer">
          <img className="w-full h-full object-fill" src={"/homework.png"} alt="image" />
        </div>
      ))}
    </div>
  );
};

export default Image;
