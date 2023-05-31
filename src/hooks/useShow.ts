import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useCharacterStore from "../store";

export const useShow = () => {
  const location = useLocation();
  const [show, setShow] = useState(false);
  const { setPosition } = useCharacterStore();

  useEffect(() => {
    const path = location.pathname.split("/")[2];
    const isShow = path !== undefined;

    setShow(isShow);

    let position = 0;
    if (isShow) {
      position = parseInt(path);
    }

    if (!Number.isNaN(position)) {
      setPosition(position);
    }
  }, [location.pathname]);

  return { show };
};
