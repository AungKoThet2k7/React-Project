import { HiChevronLeft, HiChevronRight, HiMiniHome } from "react-icons/hi2";
import { Link, useNavigate } from "react-router-dom";

const Breadcrumb = ({ currentpageTitle }) => {
  return (
    <div className="w-full bg-white border-b border-gray-200 shadow flex p-3 justify-between gap-3 mb-5">
      <nav className="text-gray-700 font-medium ps-3">{currentpageTitle}</nav>
      <nav className="flex" aria-label="Breadcrumb">
            <Link
              to={"/dashboard"}
              className="inline-flex hover:text-gray-800 items-center text-sm font-medium text-gray-700"
            >
              Dashboard
            </Link>
            <div className="flex items-center">
              <HiChevronRight className="" />
              <span className="ms-1 select-none text-sm font-medium text-gray-400 ">
                {currentpageTitle}
              </span>
            </div>
      </nav>
    </div>
  );
};

export default Breadcrumb;
