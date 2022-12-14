import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./LeftsideNav.css";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://learnex-academy-server.vercel.app/course-categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <h5 className="mb-3 category_heading">all category</h5>
      {categories.map((category) => (
        <p className="left_category" key={category.id}>
          <Link to={`/category/${category.id}`}>{category.name}</Link>
        </p>
      ))}
    </div>
  );
};

export default LeftSideNav;
