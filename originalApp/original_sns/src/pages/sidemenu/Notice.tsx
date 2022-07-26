import { NextPage } from "next";
import React, { useEffect, useMemo, useState } from "react";
import tw from "twin.macro";
import AccountCircleIcon from "../../components/icons/AccountCircleIcon";
import { NoticeListType } from "../../types/NoticeList";

const Notice: NextPage = () => {
  const [noticeList, setNoticeList] = useState<NoticeListType[]>();

  useEffect(() => {
    const testNoticeList: NoticeListType[] = [
      { name: "user1", id: 1, notice: "お知らせ1", replyStatus: 0 },
      { name: "user2", id: 2, notice: "お知らせ2", replyStatus: 1 },
    ];
    setNoticeList(testNoticeList);
  }, []);

  const noticeDetail = (replyStatus: number, name: string) =>
    replyStatus === 0
      ? `${name}さんから返信がありました`
      : `${name}さんからいいねがありました`;

  return (
    <>
      {noticeList?.map((notice) => (
        <div
          tw="border-0 border-b border-solid border-color[blue] mt-3 pb-2"
          key={notice.id}
        >
          <div tw="flex items-center ml-2">
            <div tw="w-14">
              <AccountCircleIcon height="50px" />
            </div>
            <div>{noticeDetail(notice.replyStatus, notice.name)}</div>
          </div>
          <div tw="ml-16">{notice.notice}</div>
        </div>
      ))}
    </>
  );
};

export default Notice;
