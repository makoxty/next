import React, { useState, useContext } from "react";
import { Layout } from "./Layout";
import Header from "./Header";
import { UserInfoContext, User } from "../_app";

let initialValue: User = { name: "", sex: "", age: 0, hobby: "", index: 0 };

const Add = () => {
  const { users, setUsers } = useContext(UserInfoContext);

  const [newUser, setNewUser] = useState(initialValue);

  const handleChangeName = (e: any) => {
    const name = e.target.value;
    setNewUser({ ...newUser, name });
  };

  const handleChangeSex = (e: any) => {
    const sex = e.target.value;
    setNewUser({ ...newUser, sex });
  };

  const handleChangeAge = (e: any) => {
    const age = e.target.value;
    setNewUser({ ...newUser, age });
  };

  const handleChangeHobby = (e: any) => {
    const hobby = e.target.value;
    setNewUser({ ...newUser, hobby });
  };

  const clickSubmit = () => {
    const index =
      users.reduce(
        (previousValue, user) => Math.max(previousValue, user.index),
        -1
      ) + 1;
    setUsers([...users, { ...newUser, index }]);
  };

  return (
    <>
      <form className="pt-5">
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="text"
            value={newUser.name}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            onChange={handleChangeName}
            required
          />
          <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            名前
          </label>
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <input
            value={newUser.sex}
            onChange={handleChangeSex}
            type="text"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            required
          />
          <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            性別
          </label>
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <input
            value={newUser.age}
            onChange={handleChangeAge}
            type="text"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            required
          />
          <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            年齢
          </label>
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <input
            value={newUser.hobby}
            onChange={handleChangeHobby}
            type="text"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            required
          />
          <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            趣味
          </label>
        </div>

        <button
          type="button"
          onClick={clickSubmit}
          className="mt-5 text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"
        >
          登録
        </button>
      </form>
    </>
  );
};

export default Add;
