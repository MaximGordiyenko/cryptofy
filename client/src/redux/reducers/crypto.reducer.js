import { cryptoConstants } from "../../constants/crypto.constants";

const initialState = {
  arrayBtcUsd: [],
  loading: true,
};

export const setCandleBTC = (state = initialState, { type, btcUsd }) => {
  switch (type) {
    case cryptoConstants.GET_BTC_SUCCESS:
      return {
        ...state,
        arrayBtcUsd: btcUsd,
        loading: false,
      };
    default:
      return state;
  }
};