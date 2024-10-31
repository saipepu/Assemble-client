"use client";

import { useState } from "react";

const BioSection = ({ bio, charLimit = 200 }: any) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Determine whether to show the full bio or just the truncated version
  const showText = isExpanded ? bio : `${bio.substring(0, charLimit)}...`;

  return (
    <div className="w-full flex flex-col justify-start items-start">
      <p className="text-base leading-tight">{showText}</p>
      {bio.length > charLimit && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-xs font-light text-blue-400 underline leading-tight"
        >
          {isExpanded ? "Show less" : "Read more"}
        </button>
      )}
    </div>
  );
};

export default BioSection;
