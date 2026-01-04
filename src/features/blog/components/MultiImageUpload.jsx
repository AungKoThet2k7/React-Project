import { useState } from "react";
import { LuImage, LuTrash2 } from "react-icons/lu";

const MultiImageUpload = () => {
  const [images, setImages] = useState([]);

  const handleMultiImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const newFile = files.map((file) => URL.createObjectURL(file));
    setImages([...images, ...newFile]);
  };

  const handleImageDelete = (index) => {
    const newImages = images.filter((image, i) => i !== index);
    // const removeImage = images.filter((image, i) => i === index);

    setImages(newImages);
  };

  return (
    <form className=" bg-white rounded-lg flex flex-col gap-4 shadow-lg">
      <h1 className="text-2xl text-gray-900 border-b border-gray-200 p-5">
        Images
      </h1>
      <div className="flex flex-col gap-5 p-5">
        <div className="w-full h-[400px] overflow-scroll grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 border border-gray-300 rounded-lg shadow">
          {images.length === 0 ? (
            <div className="col-span-full flex flex-col gap-3 items-center justify-center">
              <LuImage className=" text-gray-400" size={40} />
              <span className=" text-gray-400 text-xl">Upload Images</span>
            </div>
          ) : (
            images.map((image, index) => (
              <div key={index} className="">
                <img
                  src={image}
                  className="rounded-t-lg object-cover aspect-square"
                  alt=""
                />
                <button
                  type="button"
                  onClick={() => handleImageDelete(index)}
                  className="rounded-b-lg bg-red-500 text-white w-full flex items-center justify-center py-2"
                >
                  <LuTrash2 size={20} />
                </button>
              </div>
            ))
          )}
        </div>

        <div className=" flex flex-col gap-2">
          <label className="text-gray-400">Can Upload Multiple Image</label>
          <input
            type="file"
            multiple
            onChange={handleMultiImageUpload}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-xs sm:text-sm rounded-lg block w-full p-1.5 sm:p-2.5 dark:bg-gray-700 outline-none dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
          />
        </div>
      </div>
    </form>
  );
};

export default MultiImageUpload;
