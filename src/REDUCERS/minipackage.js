const initialState = {
    miniPackage: [],
  };
  
  export default (state = initialState, { type, payload }) => {
    switch (type) {
      case "ADD_PACKAGE":
        return {
          ...state,
          miniPackage: [...state.miniPackage, payload]
        };
      case "REFRESH_PACKAGES":
        return {
          ...state,
          miniPackage: payload
        };
      default:
        return state
    }
  }
  