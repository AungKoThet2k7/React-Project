import React from "react";
import Breadcrumb from "../../../components/Breadcrumb";
import CreateHolidays from "../components/CreateHolidays";

const HolidaysPage = () => {
  return (
    <section className=""> 
      <Breadcrumb currentpageTitle="Holidays" />
      <CreateHolidays />
    </section>
  );
};

export default HolidaysPage;
