import { errorConstants } from "../../constants/error.constants";

const failure = error => ({
  type: errorConstants.GET_FAILURE,
  error: error?.response?.data,
});

export const errorAction = {
  failure,
}