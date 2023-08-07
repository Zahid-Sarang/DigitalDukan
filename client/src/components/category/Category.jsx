import React from "react";
import Mens from "../../assets/category/Mens.jpg";
import Women from "../../assets/category/womens.jpg";
import sports from "../../assets/category/sports.jpg";
import kids from "../../assets/category/kids.jpg";
import bag from "../../assets/category/bag.jpg";
import CategoryContent from "../../utils/CategoryContent";
const Category = () => {
  return (
    <div className="w-full pb-20">
      <div className="pb-6 font-sans text-3xl font-semibold">
        <h3>Shop By Category</h3>
      </div>
      <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-2 lgl:grid-col-3 s-4 xl:grid-cols-5">
      <CategoryContent img={Mens} title="Men's Collection" url="/"/>
      <CategoryContent img={Women} title="Women's Collection" url="/"/>
      <CategoryContent img={sports} title="sport's Collection" url="/"/>
      <CategoryContent img={kids} title="kid's Collection" url="/"/>
      <CategoryContent img={bag} title="bag's Collection" url="/"/>
      </div>
    </div>
  );
};

export default Category;
