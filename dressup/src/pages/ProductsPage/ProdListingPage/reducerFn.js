export const reducerFn = (state, action) => {
  switch (action.type) {
    case "highToLow":
      return { ...state, sortOrder: action.value };
    case "lowToHigh":
      return { ...state, sortOrder: action.value };
    case "FiveStars":
      return { ...state, rating: action.value };
    case "FourStars":
      return { ...state, rating: action.value };
    case "ThreeStars":
      return { ...state, rating: action.value };
    case "TwoStars":
      return { ...state, rating: action.value };
    case "OneStar":
      return { ...state, rating: action.value };
    case "All":
      return { ...state, rating: action.value };
    case "Range":
      return { ...state, theValue: action.value };
    case "catg":
      return {
        ...state,
        categories: {
          ...state.categories,
          [action.value]: !state.categories[action.value],
        },
      };
    default:
      return state;
  }
};
