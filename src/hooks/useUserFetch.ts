import { useContext, useEffect, useState } from "react";
import { UserContext, UserUpdateContext } from "../context/userContext";
import { actions, State } from "../reducer/user";

export const useUserFetch = (): [State, () => void] => {
  const user = useContext(UserContext);
  const dispatch = useContext(UserUpdateContext);
  const [refetchIndex, setRefetchIndex] = useState(0);

  const refetch = () =>
    setRefetchIndex((prevRefetchIndex) => prevRefetchIndex + 1);

  useEffect(() => {
    const fetchData = async () => {
      if (!dispatch) return;
      dispatch(actions.startFetchUserAction());
      fetch("/api/user")
        .then((res) => res.json())
        .then((data) => dispatch(actions.successFetchUserAction(data)))
        .catch(() => dispatch(actions.failFetchUserAction()));
    };

    fetchData();
  }, [refetchIndex]);

  return [user, refetch];
};
