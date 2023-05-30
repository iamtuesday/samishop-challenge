import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import { BreadCumb } from "../molecules";
import { ErrorBoundary, cn } from "../../utilities";
import { PeopleList } from "../organisms";
import { useGetPeople, useWindowSize } from "../../hooks";
import { FallBack } from "../atoms";

export const Layout = () => {
  const [show, setShow] = useState<boolean>(false);
  const location = useLocation();

  const { error, data, loading } = useGetPeople();
  const { isDesktop } = useWindowSize();

  useEffect(() => {
    const isShow = location.pathname.split("/")[2] !== undefined;

    if (isShow) {
      setShow(true);
    } else {
      setShow(false);
    }
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
