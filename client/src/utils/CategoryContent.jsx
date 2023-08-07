import React from "react";
import { Link } from "react-router-dom";

const CategoryContent = ({ img, title,url}) => {
  return (
    <Link to={url}>
      <div className="flex flex-col items-center gap-4 ">
        <img src={img} alt={title} className="object-fit rounded-2xl" />

        <p>{title}</p>
      </div>
    </Link>
  );
};

export default CategoryContent;
