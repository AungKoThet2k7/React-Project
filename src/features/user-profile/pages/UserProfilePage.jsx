import React from "react";
import Breadcrumb from "../../../components/Breadcrumb";
import UserProfileCard from "../components/UserProfileCard";

const UserProfilePage = () => {
 return (
    <section className="">
      <Breadcrumb currentpageTitle="User Profile" />
      <UserProfileCard />
      </section>
  );
};

export default UserProfilePage;
