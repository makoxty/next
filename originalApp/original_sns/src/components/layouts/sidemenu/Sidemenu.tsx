import React, { useMemo, useState } from "react";
import tw from "twin.macro";
import {
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineBell,
  AiOutlineUser,
} from "react-icons/ai";
import {
  NOTICE,
  PROFILE,
  SEARCH,
  TIMELINE,
} from "../../const/ConstSideMenuList";
import Timeline from "../../../pages/sidemenu/Timeline";
import { NextPage } from "next";
import AsideTweetArea from "./AsideTweetArea";

interface Props {
  children: React.ReactNode;
}
const Sidemenu = ({ children }: Props) => {
  const [selectMenu, setSelectMenu] = useState(TIMELINE);

  const sideMenu = useMemo(
    () => (
      <div tw="flex flex-col mt-7">
        <div tw="flex items-end" onClick={() => setSelectMenu(TIMELINE)}>
          <AiOutlineHome size="30px" color="blue" />
          <div tw="ml-3 font-bold text-lg">タイムライン</div>
        </div>
        <div tw="flex items-end mt-5" onClick={() => setSelectMenu(SEARCH)}>
          <AiOutlineSearch size="30px" color="blue" />
          <div tw="ml-3 font-bold text-lg">探す</div>
        </div>
        <div tw="flex items-end mt-5" onClick={() => setSelectMenu(NOTICE)}>
          <AiOutlineBell size="30px" color="blue" />
          <div tw="ml-3 font-bold text-lg">通知</div>
        </div>
        <div tw="flex items-end mt-5" onClick={() => setSelectMenu(PROFILE)}>
          <AiOutlineUser size="30px" color="blue" />
          <div tw="ml-3 font-bold text-lg">Myプロフィール</div>
        </div>
      </div>
    ),
    []
  );

  const selectMenuChildren = useMemo(() => {
    let TargetPage: NextPage = Timeline;
    switch (selectMenu) {
      case TIMELINE:
        TargetPage = Timeline;
        break;
      // case SEARCH:
      // return <Search />
      // case NOTICE:
      //   return <Notice />
      // case PROFILE:
      //   return <Profile />
    }
    return (
      <div tw="flex-[0.45] mt-7">
        <TargetPage />
      </div>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div tw="flex ml-5">
      <div tw="flex-[0.2] h-[100vh] border-solid  border-t-0 border-b-0 border-l-0 border-r-blue-600">
        {sideMenu}
      </div>
      {selectMenuChildren}
      {selectMenu === TIMELINE && <AsideTweetArea />}
    </div>
  );
};

export default Sidemenu;
