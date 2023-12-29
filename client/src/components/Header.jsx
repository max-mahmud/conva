import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ components, design_id }) => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);

  const saveImage = async () => {};

  const downloadImage = async () => {};

  return (
    <div className="h-[60px] bg-gradient-to-r from-[#212122] via-[#27282b] to-[#2a2b2c] w-full">
      <div className="flex justify-between px-10 items-center text-gray-300 h-full">
        <Link to="/">
          <img src="https://static.canva.com/web/images/12487a1e0770d29351bd4ce4f87ec8fe.svg" alt="" />
        </Link>
        <span className="text-xl">Mini Canva</span>
        <div className="flex justify-center items-center gap-2 text-gray-300">
          <button
            disabled={loader}
            onClick={saveImage}
            className="px-3 py-[6px] outline-none bg-[#252627] rounded-sm"
          >
            {loader ? "Loading..." : "Save"}
          </button>
          <button onClick={downloadImage} className="px-3 py-[6px] outline-none bg-[#252627] rounded-sm">
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
