/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import tw from "twin.macro";
// Myプロフィール画面
const Profile: NextPage = () => {
  const [userInfo, setUserInfo] = useState({
    userName: "",
    userId: "",
    selfIntroduction: "",
    affiliationGr: "",
    postHistory: [""],
  });

  useEffect(() => {
    setUserInfo({
      ...userInfo,
      userName: "テスト",
      userId: "test",
      selfIntroduction: "自己紹介です",
      affiliationGr: "Expand",
      postHistory: [
        { id: 1, description: "1回目" },
        { id: 2, description: "2回目" },
      ],
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div tw="ml-2">
      <div tw="w-full">
        <img
          src="https://tshop.r10s.jp/kabegamiyahonpo/cabinet/phw/photo098/64210-m.jpg?fitin=720%3A720"
          alt="プロフィール写真背景"
          width={"100vw"}
          height={"30px"}
        />
      </div>
      <div tw="rounded-full relative top-[-20px]">
        <img
          src="https://tshop.r10s.jp/kabegamiyahonpo/cabinet/phw/photo098/64210-m.jpg?fitin=720%3A720"
          alt="プロフィール写真"
          width={"30px"}
          height={"30x"}
        />
      </div>
      <div>テーマ：ダークモード / ホワイトモート</div>
      <div>{userInfo.userName}</div>
      <div tw="mt-3">@{userInfo.userId}</div>
      <div tw="mt-3">{userInfo.affiliationGr}</div>
      <div tw="mt-3">{userInfo.selfIntroduction}</div>
      <div tw="mt-7">投稿履歴</div>
      <div>
        <ul>
          {userInfo.postHistory.map((value) => (
            <li key={value.id}>{value.description}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
