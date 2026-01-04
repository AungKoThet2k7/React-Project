import React from "react";
import Breadcrumb from "../../../components/Breadcrumb";
import BlogTable from "../components/BlogTable";
import { HiPlus } from "react-icons/hi2";
import { LuSearch } from "react-icons/lu";
import { Link } from "react-router-dom";

const BlogPage = () => {
  return (
    <section className="bg-gray-100">
      <Breadcrumb currentpageTitle="Blog" />
      <div className="bg-white mx-5 p-5">
        <div className="flex justify-between mb-5">
          <h1 className=" text-gray-900 font-bold text-2xl">Blog</h1>
          <Link
            to={"/dashboard/blog/create"}
            className="flex items-center justify-center bg-sky-400 text-white px-3 py-2 rounded-lg"
          >
            <HiPlus />
            <span>Add New</span>
          </Link>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-3">
            <div className="flex">
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-400 text-xs sm:text-sm rounded-l-lg inline-block p-1.5 dark:bg-gray-700 outline-none dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                placeholder=""
              />
              <button className="p-1.5 bg-gray-300 text-gray-600 flex items-center justify-center rounded-r-lg">
                <LuSearch size={16} />
              </button>
            </div>
            <div className="flex items-center gap-1">
              <label
                htmlFor="Status"
                className="block text-sm font-medium text-gray-400 dark:text-white"
              >
                Status
              </label>
              <select
                id="Status"
                className="bg-gray-50 border border-gray-300 text-gray-400 text-sm rounded-lg block p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                defaultValue=""
              >
                <option disabled value="">
                  Status
                </option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
            <div className="flex items-center gap-1">
              <label
                htmlFor="Category"
                className="block text-sm font-medium text-gray-400 dark:text-white"
              >
                Category
              </label>
              <select
                id="Category"
                className="bg-gray-50 border border-gray-300 text-gray-400 text-sm rounded-lg  block p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white "
                defaultValue=""
              >
                <option disabled value="">
                  Category
                </option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
          </div>
          <div className="flex items-center uppercase gap-2">
            <p className="text-xs">Display</p>
            <select
              className="bg-gray-50 border border-gray-300 text-gray-400 text-sm rounded-lg block p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              defaultValue="1"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <p className="text-xs">Items</p>
          </div>
        </div>
      </div>
      <BlogTable />
    </section>
  );
};

export default BlogPage;
