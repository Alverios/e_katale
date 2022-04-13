//here we define all the application level states and define actions to make the changes to the state.
export const initialState = {
  cart: [],
};

//Selector
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
    default:
        return state;
  }
};

export default reducer;
