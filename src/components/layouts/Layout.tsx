import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import { BreadCumb } from "../molecules";
import { ErrorBoundary, cn } from "../../utilities";
import { PeopleList } from "../organisms";
import { useGetPeople } from "../../hooks";
import { FallBack } from "../atoms";

export const Layout = () => {
  const { error, data, loading } = useGetPeople();
  const [show, setShow] = useState<boolean>(false);
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  const location = useLocation();

  useEffect(() => {
    const isShow = location.pathname.split("/")[2] !== undefined;

    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1024);
    };

    if (isShow) {
      setShow(true);
    } else {
      setShow(false);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [location.pathname]);

  return (
    <main className="Layout">
      <BreadCumb label="People" show={show} isDesktop={isDesktop} />

      <div className={cn("Layout__container", show && !isDesktop && "active")}>
        <div className="Layout__left">
          <ErrorBoundary
            fallBackComponent={<FallBack />}
            resetCondition={data}
            error={error}
          >
            <PeopleList loading={loading} listItems={data} />
          </ErrorBoundary>
        </div>

        <div className="Layout__right">
          <Outlet />
        </div>
      </div>
    </main>
  );
};
