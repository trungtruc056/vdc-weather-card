import { getWeatherByWoeid, getWoeid } from "apis/metaweather";

export const TYPE = {
  FETCH_SUGGEST_LIST_PROCESSING: 'FETCH_SUGGEST_LIST_PROCESSING',
  FETCH_SUGGEST_LIST_SUCCESS: 'FETCH_SUGGEST_LIST_SUCCESS',
  FETCH_SUGGEST_LIST_FAILURE: 'FETCH_SUGGEST_LIST_FAILURE',
  UPDATE_SEARCHING: 'UPDATE_SEARCHING',
  RESET_SUGGEST_LIST: 'RESET_SUGGEST_LIST',
  CURRENT_WOEID: 'CURRENT_WOEID',
  FETCH_CUR_PLACE_PROCESSING: 'FETCH_CUR_PLACE_PROCESSING',
  FETCH_CUR_PLACE_SUCCESS: 'FETCH_CUR_PLACE_SUCCESS',
}

export const initialState = {
  isLoading: false,
  isLoadWeather: false,
  suggestList: [],
  curWoeid: null,
  curPlace: null,
  isSearching: false,
};

export function weatherReducer(state, action) {
  switch (action.type) {
    case TYPE.FETCH_SUGGEST_LIST_PROCESSING:
      return { ...state, isLoading: true }
    case TYPE.FETCH_SUGGEST_LIST_SUCCESS:
      return { ...state, suggestList: action.payload, isLoading: false };
    case TYPE.RESET_SUGGEST_LIST:
      return { ...state, suggestList: action.payload, isLoading: false }
    case TYPE.UPDATE_SEARCHING:
      return { ...state, isSearching: action.payload }
    case TYPE.CURRENT_WOEID:
      return { ...state, curWoeid: action.payload }
    case TYPE.FETCH_CUR_PLACE_PROCESSING:
      return { ...state, curPlace: action.payload, isLoadWeather: true }
    case TYPE.FETCH_CUR_PLACE_SUCCESS:
      return { ...state, curPlace: action.payload, isLoadWeather: false }
    default:
      return state;
  }
}

export const getSuggestList = async (dispatch, param) => {
  dispatch({ type: TYPE.FETCH_SUGGEST_LIST_PROCESSING });
  let data = [];
  data = await getWoeid(param).then(data => data.data.slice(0, 8));
  dispatch({ type: TYPE.FETCH_SUGGEST_LIST_SUCCESS, payload: data });
}

export const getCurrentWoeid = async (dispatch, param) => {
  dispatch({ type: TYPE.CURRENT_WOEID, payload: param });
}

export const getCurrentPlace = async (dispatch, param) => {
  dispatch({ type: TYPE.FETCH_CUR_PLACE_PROCESSING });
  let data = [];
  data = await getWeatherByWoeid(param).then(data => data.data.consolidated_weather);
  dispatch({ type: TYPE.FETCH_CUR_PLACE_SUCCESS, payload: data });
}

export const updateSearching = (dispatch, status) => {
  dispatch({ type: TYPE.UPDATE_SEARCHING, payload: status });
}

export const resetSuggestList = (dispatch) => {
  dispatch({ type: TYPE.RESET_SUGGEST_LIST, payload: [] });
}