import { useUserFetch } from "../hooks/useUserFetch";

export default () => {
  const [userState, refetch] = useUserFetch();
  return (
    <div>
      {!userState ? (
        "init"
      ) : userState?.isLoading ? (
        <div>loading</div>
      ) : (
        <div>user name: {userState.data.name}</div>
      )}
      <button onClick={() => refetch()}>random fetch</button>
    </div>
  );
};
