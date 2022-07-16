import { NextPage } from "next";
import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";

const AsideTweetArea: NextPage = () => {
  return (
    <div tw="ml-7 mt-7">
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="reactjs"
        options={{ height: "100vh" }}
      />
    </div>
  );
};

export default AsideTweetArea;
