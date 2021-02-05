import Actions, {
  getActionSuccess,
  getActionFail,
  getActionUnmount,
} from '../actions';

const initialState = {
  token: null,
  error: null,
  fetching: false,
};

export const tokenAppReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_TOKEN: {
      return {...state, fetching: true};
    }
    case getActionSuccess(Actions.GET_TOKEN):
      return {...state, token: action.data, error: null, fetching: false};
    case getActionFail(Actions.GET_TOKEN):
      return {...state, token: null, error: action.error, fetching: false};
    case getActionUnmount(Actions.GET_TOKEN):
      return {...initialState};
    default:
      return state;
  }
};
const tokenReducer = {tokenAppReducer};
export default tokenReducer;
