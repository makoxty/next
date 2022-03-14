import React from "react";
import Header from "./Header";
import { Layout } from "./Layout";

const Edit = () => {
  return (
    <>
      <Layout>
        <Header />
        <div className="pt-3">
          <label className="block mb-2 text-sm font-medium">名前</label>
          <input
            type="text"
            id="small-input"
            className="w-full block p-2 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="pt-3">
          <label className="block mb-2 text-sm font-medium">性別</label>
          <input
            type="text"
            id="small-input"
            className="w-full block p-2 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="pt-3">
          <label className="block mb-2 text-sm font-medium">年齢</label>
          <input
            type="text"
            id="small-input"
            className="w-full block p-2 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="pt-3">
          <label className="block mb-2 text-sm font-medium">趣味</label>
          <input
            type="text"
            id="small-input"
            className="w-full block p-2 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <button
          type="button"
          className="mt-5 text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"
        >
          登録
        </button>
      </Layout>
    </>
  );
};

export default Edit;
