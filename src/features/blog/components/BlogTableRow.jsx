import React from "react";
import { HiOutlinePencilSquare, HiTrash } from "react-icons/hi2";
import { LuSave } from "react-icons/lu";
import { Link } from "react-router-dom";

const BlogTableRow = () => {
  return (
    <tr className="bg-white border-b dark:border-gray-700 border-gray-200">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        1
      </th>
      <td className="px-6 py-4 flex items-center gap-2">
        <img src="../src/assets/react-logo.svg" className="w-32 h-16" alt="" />
        <p className="">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit Dignissimos
          cumque officiis, voluptas animi non optio.
        </p>
      </td>
      <td className="px-6 py-4">Lorem, ipsum dolor.</td>
      <td className="px-6 py-4">
        <label className="cursor-pointer">
          <input type="checkbox" className="sr-only peer" />
          <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600" />
        </label>
      </td>
      <td className="px-6 py-4">
        <div className="flex gap-2">
          <input
            type="number"
            className="px-2 py-1 rounded-md border border-gray-900"
          />
          <button className="p-2 rounded-md bg-sky-400 text-white">
            <LuSave size={16} />
          </button>
        </div>
      </td>
      <td className="px-6 py-4 text-end">
        <p className="text-gray-900 font-bold">Admin</p>
        <p className="text-gray-400">9/6/2025</p>
        <p className="text-gray-400">9:30 AM</p>
      </td>
      <td className="px-6 py-4">
        <div className="flex gap-2">
          <Link className="text-white bg-sky-400 p-2 rounded-md">
            <HiOutlinePencilSquare size={16} />
          </Link>
          <button className="text-white bg-red-400 p-2 rounded-md">
            <HiTrash size={16} />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default BlogTableRow;
