import React from "react";
import Sidebar from "../components/Sidebar";
import Twittes from "../components/Twittes";
import Trends from "../components/Trends";

const Home = () => {
  return (
    <>
      <Sidebar />
      <Twittes />
      <Trends />
    </>
  );
};

export default Home;
