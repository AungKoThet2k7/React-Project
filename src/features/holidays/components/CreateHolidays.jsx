import { useState } from "react";
import { HiOutlinePlusCircle, HiOutlineTrash, HiTrash } from "react-icons/hi2";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import dayjs from "dayjs";

const CreateHolidays = () => {
  const [inputs, setInputs] = useState([{ value: "", date: "" }]);

  const handleCreateInput = () => {
    setInputs([...inputs, { value: "", date: "" }]);
  };

  const handleValueChange = (e, index) => {
    const newInputs = [...inputs];
    newInputs[index].value = e.target.value;
    setInputs(newInputs);
    console.log(inputs);
  };

  const handleDateChange = (e, index) => {
    const newInputs = [...inputs];
    newInputs[index].date = e.target.value;
    setInputs(newInputs);
    console.log(inputs);
  };

  const handleDeleteInput = (index) => {
    const newInputs = inputs.filter((input, i) => i !== index);
    setInputs(newInputs);
  };

  return (
    <section className="bg-white xl:w-1/2 rounded-lg mx-5 p-3">
      <h1 className="text-xl font-medium p-3 border-b border-gray-200">Public Holidays</h1>

      <div className="p-3">
        <div className="flex justify-end ">
          <button
            onClick={handleCreateInput}
            className="bg-green-400 text-white p-2 rounded-md"
          >
            <HiOutlinePlusCircle size={20} />
          </button>
        </div>

        {inputs.map((input, index) => (
          <div key={index} className="flex gap-3 items-end mb-5">
            <div className="w-1/2">
              <label className="text-sm">Note</label>
              <input
                type="text"
                value={input.value}
                onChange={(e) => handleValueChange(e, index)}
                className="w-full mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-xs sm:text-sm rounded-lg block p-2.5 dark:bg-gray-700 outline-none dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
              />
            </div>

            <div className="w-1/2">
              <label className="text-sm">Date</label>
              <input
                type="date"
                className="w-full mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-xs sm:text-sm rounded-lg block p-2.5 dark:bg-gray-700 outline-none dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                value={input.date}
                onChange={(e) => handleDateChange(e, index)}
              />
            </div>

            <div>
              <button
                type="button"
                onClick={() => handleDeleteInput(index)}
                className="bg-red-400 text-white p-2 rounded-md"
              >
                <HiOutlineTrash size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CreateHolidays;
