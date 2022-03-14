import { ReactNode } from "react";
import "tailwindcss/tailwind.css";
import { Provider } from "react-redux";

type Props = {
  children: ReactNode;
};

export function Layout({ children, ...props }: Props) {
  return (
    <>
          <div className="w-full flex justify-center justify-items-center">
            <div className="w-9/12">
              <div {...props}>{children}</div>
            </div>
          </div>
    </>
  );
}
