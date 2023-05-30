import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="">
      <div
        className={`flex flex-col max-w-screen-2xl 
        ${location.pathname === "/" ? "max" : "min"}-h-screen 
        my-0 mx-auto p-4 overflow-x-hidden lg:flex-row`}
      >

        <Outlet />
      </div>
    </div>
  );
};
