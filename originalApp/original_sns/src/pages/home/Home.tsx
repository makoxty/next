import React, { useMemo, useState } from "react";
import type { NextPage } from "next";
import Sidemenu from "../../components/layouts/sidemenu/Sidemenu";
import Timeline from "../sidemenu/Timeline";

const Home: NextPage = () => {
  return (
    <Sidemenu>
      <Timeline />
    </Sidemenu>
  );
};

export default Home;
