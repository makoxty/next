import React, { createContext, useState } from "react";
import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import Header from "./components/Header";

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

const initialState: User[] = [];

export const UserInfoContext = createContext({} as PropertyTypeContext);

const App = ({ Component, pageProps }: AppProps) => {
  const [users, setUsers] = useState(initialState);
  return (
    <div className="w-full flex justify-center justify-items-center">
      <div className="w-9/12">
        <UserInfoContext.Provider value={{ users, setUsers }}>
          <Header />
          <Component {...pageProps} />
        </UserInfoContext.Provider>
      </div>
    </div>
  );
};

export default App;
