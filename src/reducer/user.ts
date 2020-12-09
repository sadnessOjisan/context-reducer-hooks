import { User } from "../type/User";

const START_FETCH_USER = "START_FETCH_USER" as const;
const SUCCESS_FETCH_USER = "SUCCESS_FETCH_USER" as const;
const FAIL_FETCH_USER = "FAIL_FETCH_USER" as const;

const startFetchUserAction = () => {
  return { type: START_FETCH_USER };
};

const successFetchUserAction = (user: User) => {
  return { type: SUCCESS_FETCH_USER, payload: user };
};

const failFetchUserAction = () => {
  return { type: FAIL_FETCH_USER };
};

export const actions = {
  startFetchUserAction,
  successFetchUserAction,
  failFetchUserAction,
};

export type ActionType =
  | ReturnType<typeof startFetchUserAction>
  | ReturnType<typeof successFetchUserAction>
  | ReturnType<typeof failFetchUserAction>;

export type State =
  | undefined // before init
  | { isLoading: true; data: undefined } // loading
  | { isLoading: false; data: User } // success
  | { isLoading: false; data: undefined }; // fail

export const inialState: State = undefined;

export const reducer = (state: State, action: ActionType): State => {
  switch (action.type) {
    case START_FETCH_USER:
      return {
        ...state,
        isLoading: true,
        data: undefined,
      };
    case SUCCESS_FETCH_USER:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case FAIL_FETCH_USER:
      return {
        ...state,
        isLoading: false,
        data: undefined,
      };
    default:
      return state;
  }
};
