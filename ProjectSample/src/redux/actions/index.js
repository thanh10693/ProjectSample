export default {
  GET_TOKEN: 'GET_TOKEN',
};
export function getActionSuccess(action) {
  return action + '_SUCCESS';
}
export function getActionFail(action) {
  return action + '_FAIL';
}
export function getActionUnmount(action) {
  return action + '_UNMOUNT';
}
