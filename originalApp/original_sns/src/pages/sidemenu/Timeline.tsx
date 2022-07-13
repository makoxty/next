import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import tw from "twin.macro";
import AccountCircleIcon from "../../components/icons/AccountCircleIcon";
import { UserListType } from "../../components/type/UserList";

const Timeline: NextPage = () => {
  const [userNameList, setUserNameList] = useState<UserListType[]>();

  useEffect(() => {
    const testUserList: UserListType[] = [
      { name: "user1", id: 1, tweet: "tweet1" },
      { name: "user2", id: 2, tweet: "tweet2" },
    ];
    setUserNameList(testUserList);
  }, []);

  return (
    <>
      {userNameList?.map((user) => (
        <div
          tw="border-0 border-b border-solid border-color[blue] mt-3 pb-2"
          key={user.id}
        >
          <div tw="flex items-center ml-2">
            <div tw="w-14">
              <AccountCircleIcon height="50px" />
            </div>
            <div>{user.name}</div>
          </div>
          <div tw="ml-16">{user.tweet}</div>
        </div>
      ))}
    </>
  );
};

export default Timeline;
