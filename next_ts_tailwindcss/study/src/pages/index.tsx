import type { NextPage } from "next";
import "tailwindcss/tailwind.css";
import List from "./components/List";
import { Layout } from "./components/Layout";

const Home: NextPage = () => {
  return (
    <>
      <List />
    </>
  );
};

export default Home;
