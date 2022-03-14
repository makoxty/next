import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { UserInfoContext } from "../../_app";

const Edit = () => {
  const router = useRouter();
  const { id } = router.query;
  const { users, setUsers } = useContext(UserInfoContext);
  // 初期表示時のみしか実行されない
  const [editUser, setEditUser] = useState(() => {
    const user = users.find((user) => String(user.index) === id);
    return user;
  });

  if (editUser === undefined) {
    return <div>Not Found</div>;
  }

  const handleChangeName = (e: any) => {
    const name = e.target.value;
    setEditUser({ ...editUser, name });
  };

  const handleChangeSex = (e: any) => {
    const sex = e.target.value;
    setEditUser({ ...editUser, sex });
  };

  const handleChangeAge = (e: any) => {
    const age = e.target.value;
    setEditUser({ ...editUser, age });
  };

  const handleChangeHobby = (e: any) => {
    const hobby = e.target.value;
    setEditUser({ ...editUser, hobby });
  };

  const clickSubmit = () => {
    const next = users.map((user) => {
      return String(user.index) === id ? editUser : user;
    });
    setUsers(next);

    // 以下も上記と同じ処理
    // const index = users.findIndex((user) => String(user.index) === id);
    // const next = users.slice();
    // next.splice(index, 1, editUser);
    // setUsers(next);
  };

  return (
    <>
      <div className="pt-3">
        <label className="block mb-2 text-sm font-medium">名前</label>
        <input
          type="text"
          value={editUser.name}
          onChange={handleChangeName}
          id="small-input"
          className="w-full block p-2 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div className="pt-3">
        <label className="block mb-2 text-sm font-medium">性別</label>
        <input
          type="text"
          value={editUser.sex}
          onChange={handleChangeSex}
          id="small-input"
          className="w-full block p-2 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div className="pt-3">
        <label className="block mb-2 text-sm font-medium">年齢</label>
        <input
          type="text"
          value={editUser.age}
          onChange={handleChangeAge}
          id="small-input"
          className="w-full block p-2 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div className="pt-3">
        <label className="block mb-2 text-sm font-medium">趣味</label>
        <input
          type="text"
          value={editUser.hobby}
          onChange={handleChangeHobby}
          id="small-input"
          className="w-full block p-2 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <button
        type="button"
        onClick={clickSubmit}
        className="mt-5 text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"
      >
        登録
      </button>
    </>
  );
};

export default Edit;
