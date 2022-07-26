import React, { useMemo, useState } from "react";
import tw, { css } from "twin.macro";
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
import Profile from "../../../pages/sidemenu/Profile";
import Notice from "../../../pages/sidemenu/Notice";

interface Props {
  children: React.ReactNode;
}
const Sidemenu = ({ children }: Props) => {
  const [selectMenu, setSelectMenu] = useState(TIMELINE);

  // サイドメニューはこっちで実装できた方が見やすいと思う
  // const sideMenuList = useMemo(
  //   () => [
  //     {
  //       constMenuName: TIMELINE,
  //       iconName: AiOutlineHome,
  //       menuName: "タイムライン",
  //     },
  //     {
  //       constMenuName: SEARCH,
  //       iconName: AiOutlineSearch,
  //       menuName: "探す",
  //     },
  //     {
  //       constMenuName: NOTICE,
  //       iconName: AiOutlineBell,
  //       menuName: "通知",
  //     },
  //     {
  //       constMenuName: PROFILE,
  //       iconName: AiOutlineUser,
  //       menuName: "Myプロフィール",
  //     },
  //   ],
  //   []
  // );

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
      //   TargetPage = Search
      //   break;
      case NOTICE:
        TargetPage = Notice;
        break;
      case PROFILE:
        TargetPage = Profile;
        break;
    }

    return (
      <div
        css={selectMenu === TIMELINE ? tw`flex-[0.5]` : tw`flex-[0.8]`}
        tw="mt-7"
      >
        <TargetPage />
      </div>
    );
  }, [selectMenu]);

  const viewContents = useMemo(
    () => (
      <>
        {selectMenu === TIMELINE && (
          <div tw="flex-[0.3]">
            <AsideTweetArea />
          </div>
        )}
      </>
    ),
    [selectMenu]
  );
  return (
    <div tw="flex ml-4">
      <div tw="flex-[0.2] h-[100vh] border-solid  border-t-0 border-b-0 border-l-0 border-r-blue-600">
        {sideMenu}
      </div>
      {selectMenuChildren}
      {viewContents}
    </div>
  );
};

export default Sidemenu;
