import React, { createContext, ReactNode, useState } from "react";
import "tailwindcss/tailwind.css";
import { AppProps } from "next/app";

export interface User {
  name: string;
  sex: string;
  age: number;
  hobby: string;
  index: number;
}

interface PropertyTypeContext {
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
}

const initialState: User[] = []

export const UserInfoContext = createContext({} as PropertyTypeContext);

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [users, setUsers] = useState(initialState);
  return (
    <>
      <div className="w-full flex justify-center justify-items-center">
        <div className="w-9/12">
          <UserInfoContext.Provider value={{ users, setUsers }}>
            <Component {...pageProps} />
          </UserInfoContext.Provider>
        </div>
      </div>
    </>
  );
};

export default MyApp;
