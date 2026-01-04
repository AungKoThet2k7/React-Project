import { HiSave, HiX } from "react-icons/hi";
import Breadcrumb from "../../../components/Breadcrumb";
import BlogCreateform from "../components/BlogCreateform";
import { LuSave, LuSaveAll, LuSaveOff } from "react-icons/lu";
import ImageUploadForm from "../components/ImageUploadForm";
import MultiImageUpload from "../components/MultiImageUpload";
import { Link, useNavigate } from "react-router-dom";

const BlogCreatePage = () => {
  return (
    <section className="">
      <Breadcrumb currentpageTitle="Create Blog" />

      <nav className="flex justify-between px-5 mb-5">
        <h1 className="text-2xl font-bold">Create Blog</h1>
        <div className="flex gap-2">
          <button className="flex items-center justify-center gap-2 rounded-lg px-4 py-2 bg-sky-400 text-white">
            <LuSave size={16} />
            <span>Save</span>
          </button>
          <Link
            to={"/dashboard/blog"}
            className="flex items-center justify-center gap-2 rounded-lg px-4 py-2 bg-gray-300 text-white"
          >
            <HiX size={16} />
            <span>Cancel</span>
          </Link>
        </div>
      </nav>

      <div className="px-5 grid grid-cols-5 gap-5">
        <div className="col-span-3">
          <BlogCreateform />
        </div>

        <div className="col-span-2 flex flex-col gap-5 mb-5">
          <ImageUploadForm />
          <MultiImageUpload />
        </div>
      </div>
    </section>
  );
};

export default BlogCreatePage;
