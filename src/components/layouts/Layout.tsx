import { Outlet } from "react-router-dom";

import { useGetPeople, useShow, useWindowSize } from "../../hooks";
import useCharacterStore from "../../store";

import { BreadCumb } from "../molecules";
import { ErrorBoundary, cn } from "../../utilities";
import { PeopleList } from "../organisms";
import { FallBack } from "../atoms";


export const Layout = () => {
  const { error, data, loading } = useGetPeople();
  const { isDesktop } = useWindowSize();
  const { name } = useCharacterStore();
  const { show } = useShow();

  return (
    <main className="Layout">
      <BreadCumb label={name} show={show} isDesktop={isDesktop} />

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
