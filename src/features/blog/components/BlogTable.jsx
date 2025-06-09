import React from "react";
import BlogTableRow from "./BlogTableRow";

const BlogTable = () => {
  return (
    <div className="relative overflow-x-auto rounded-t-none rounded-b-lg shadow-md mx-5">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="border-b bg-white text-nowrap text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              #
            </th>
            <th scope="col" className="px-6 py-3">
              Blog Title
            </th>
            <th scope="col" className="px-6 py-3">
              Blog Category
            </th>
            <th scope="col" className="px-6 py-3">
              Enble
            </th>
            <th scope="col" className="px-6 py-3">
              Sorting
            </th>
            <th scope="col" className="px-6 py-3 text-end">
              Last updated
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <BlogTableRow />
        </tbody>
      </table>
    </div>
  );
};

export default BlogTable;
