import { NextPage } from "next";
import React, { useEffect, useRef, useState } from "react";
import tw from "twin.macro";
import AccountCircleIcon from "../../components/icons/AccountCircleIcon";
import { UserListType } from "../../types/UserList";
import { HStack, Textarea } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import StormIcon from "../../components/icons/StormIcon";

// タイムライン画面
const Timeline: NextPage = () => {
  const [tweetList, setTweetList] = useState<UserListType[]>([
    {
      name: "",
      id: 0,
      tweet: "",
    },
  ]);
  const [inputData, setInputData] = useState({ inputTweet: "" });
  const inputTweetAreaRef = useRef<string>("");

  useEffect(() => {
    const testUserList: UserListType[] = [
      { name: "user1", id: 1, tweet: "tweet1" },
      { name: "user2", id: 2, tweet: "tweet2" },
    ];
    setTweetList(testUserList);
  }, []);

  const addTweetList = () => {
    setTweetList((prevState) => [
      ...prevState,
      {
        name: "あああ",
        // Todo 最後の要素のid + 1をしたいがならない
        id: prevState.slice(-1)[0].id + 1,
        tweet: inputData.inputTweet,
      },
    ]);
    inputTweetAreaRef.current.value = "";
  };

  const handleChangeTweet = (e: any) => {
    let inputTweet = e.target.value;
    setInputData({ inputTweet: inputTweet });
  };
  console.log({ tweetList });
  return (
    <>
      <div tw="border-0 border-b border-solid border-color[blue] w-full ml-2">
        つぶやく
        <div>
          <Textarea
            minWidth={"95%"}
            minHeight={"80px"}
            maxHeight={"80px"}
            placeholder="つぶやく内容"
            border={"solid"}
            borderColor={"blue"}
            borderRadius={"5px"}
            onChange={handleChangeTweet}
            ref={inputTweetAreaRef}
          />
          <div tw="w-full flex justify-end pb-4">
            <HStack>
              <Button
                color={"white"}
                leftIcon={<StormIcon />}
                background={"blue"}
                borderRadius={"5px"}
                marginRight={"30px"}
                height={"40px"}
                onClick={addTweetList}
              >
                つぶやく
              </Button>
            </HStack>
          </div>
        </div>
      </div>
      {tweetList
        // 降順で繰り返し
        ?.sort((a, b) => b.id - a.id)
        .map((user) => (
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
