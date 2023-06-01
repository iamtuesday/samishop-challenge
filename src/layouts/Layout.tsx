import { Outlet } from "react-router-dom";

import { useGetPeople, useShow, useWindowSize } from "../hooks";
import useCharacterStore from "../store";

import { BreadCumb } from "../components/molecules";
import { ErrorBoundary, cn } from "../utilities";
import { PeopleList } from "../components/organisms";
import { FallBack } from "../components/atoms";

export const Layout = () => {
  const { error, data, loading, currentPage, setCurrentPage } = useGetPeople();
  const { isDesktop } = useWindowSize();
  const { name } = useCharacterStore();
  const { show } = useShow();
  return (
    <main data-testid="location-display" className="Layout">
      <BreadCumb label={name} show={show} isDesktop={isDesktop} />
      <div className={cn("Layout__container", show && !isDesktop && "active")}>
        <div className="Layout__left">
          <ErrorBoundary
            fallBackComponent={<FallBack />}
            resetCondition={data}
            error={error}
          >
            <PeopleList
              loading={loading}
              listItems={data}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </ErrorBoundary>
        </div>

        <div className="Layout__right">
          <Outlet />
        </div>
      </div>
    </main>
  );
};
