export default (state, action) => {
  switch (action.type) {
    case "SET_USER_STATUS":
      return {
        ...state,
        status: action.status,
      };
    case "SET_USER_ID":
      return {
        ...state,
        userId: action.userId,
      };
    case "SET_MESSAGE":
      return {
        ...state,
        message: action.message,
      };
    case "SET_USER_INFO":
      return {
        ...state,
        userInfos: action.userInfos,
      };
    default:
      return state;
  }
};
