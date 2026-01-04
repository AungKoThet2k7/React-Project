import React, { useRef, useState } from "react";
import JoditEditor from "jodit-react";

const BlogCreateform = () => {
  const editer = useRef();
  const [value, setValue] = useState("");

  return (
    <form className="bg-white rounded-lg flex flex-col gap-4 shadow-lg p-5">
      <div className="flex flex-col gap-2">
        <label htmlFor="title" className=" text-gray-900">
          Title
        </label>
        <input
          type="text"
          id="title"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-xs sm:text-sm rounded-lg block w-full p-1.5 sm:p-2.5 dark:bg-gray-700 outline-none dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
        />
      </div>

      <div className=" flex flex-col gap-2">
        <label className=" text-gray-900">Short Description</label>
        {/* <ReactQuill className="h-40" theme="snow" value={content} onChange={setContent} /> */}
      </div>

      <div className=" flex flex-col gap-2">
        <label className=" text-gray-900 mt-10">Description</label>
        <JoditEditor ref={editer} value={value} onChange={setValue} />
      </div>
    </form>
  );
};

export default BlogCreateform;
