import React, { useMemo, useState } from "react";
import type { NextPage } from "next";
import Sidemenu from "../../components/layouts/sidemenu/Sidemenu";
import Timeline from "../sidemenu/Timeline";
import AccountCreate from "../accountCreate/AccountCreate";

const Home: NextPage = () => {
  return (
    <>
      <AccountCreate />
      {/* <Sidemenu>
      <Timeline />
    </Sidemenu> */}
    </>
  );
};

export default Home;
