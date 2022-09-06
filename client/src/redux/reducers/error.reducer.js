import { errorConstants } from "../../constants/error.constants";

export const error = (state = {}, { type, error }) => {
  switch (type) {
    case errorConstants.GET_FAILURE:
      return {
        ...state,
        error,
      };
    default:
      return state;
  }
};