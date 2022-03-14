import React, { useEffect } from "react";
import Header from "./Header";
import { Layout } from "./Layout";
import ListBody from "./ListBody";
import PageNation from "./PageNation";

const List = () => {
  return (
    <>
      <Layout>
        <Header />
        <div className="w-full flex justify-center pt-4">
          <h1 className="text-4xl">一覧画面</h1>
        </div>
        <div>
          <form>
            <div className="flex justify-end">
              <input
                type="search"
                className="h-7 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg"
                placeholder="　検索"
              />
            </div>
          </form>
        </div>
        <ListBody />
        <PageNation />
      </Layout>
    </>
  );
};

export default List;
