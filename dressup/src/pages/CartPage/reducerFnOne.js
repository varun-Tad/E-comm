const addFunc = (state, item) => {
  const objIndex = state.findIndex((obj) => obj.id === item.id);

  state[objIndex].quantity = item.quantity + 1;

  state[objIndex].newPrice = item.cost * state[objIndex].quantity;

  return state;
};

const subFunc = (state, item) => {
  const objIndex = state.findIndex((obj) => obj.id === item.id);
  if (state[objIndex].quantity === 0) {
    state[objIndex].quantity = 0;
  } else {
    state[objIndex].quantity = item.quantity - 1;
  }

  state[objIndex].newPrice = item.cost * state[objIndex].quantity;

  return state;
};

const reducerFnOne = (stateOne, action) => {
  switch (action.type) {
    case "addProToCart": {
      return {
        ...stateOne,
        TotalPrice: stateOne.TotalPrice + action.value.cost,
        CartItems: stateOne.CartItems + 1,
        Cart: [...stateOne.Cart, action.value],
      };
    }
    case "addProToWish": {
      return {
        ...stateOne,
        WishListItems: stateOne.WishListItems + 1,
        Wishlist: [...stateOne.Wishlist, action.value],
      };
    }
    case "removeFromCart": {
      return {
        ...stateOne,
        TotalPrice: stateOne.TotalPrice - action.value.cost,
        CartItems: stateOne.CartItems - 1,
        Cart: stateOne.Cart.filter((ele) => {
          return ele.brand !== action.value.brand;
        }),
      };
    }
    case "removeFromWish": {
      return {
        ...stateOne,
        WishListItems: stateOne.WishListItems - 1,
        Wishlist: stateOne.Wishlist.filter((ele) => {
          return ele.brand !== action.value.brand;
        }),
      };
    }
    case "moveToWish": {
      return {
        ...stateOne,
        CartItems: stateOne.CartItems - 1,
        WishListItems: stateOne.WishListItems + 1,
        Cart: stateOne.Cart.filter((ele) => {
          return ele.brand !== action.value.brand;
        }),
        Wishlist: [...stateOne.Wishlist, action.value],
      };
    }
    case "moveToCart": {
      return {
        ...stateOne,
        TotalPrice: stateOne.TotalPrice + action.value.cost,
        CartItems: stateOne.CartItems + 1,
        WishListItems: stateOne.WishListItems - 1,
        Wishlist: stateOne.Wishlist.filter((ele) => {
          return ele.brand !== action.value.brand;
        }),
        Cart: [...stateOne.Cart, action.value],
      };
    }
    case "inc": {
      const newState = addFunc(stateOne.Product, action.value);
      return {
        ...stateOne,
        Product: [...newState],
      };
    }
    case "dec": {
      const newState = subFunc(stateOne.Product, action.value);
      return {
        ...stateOne,
        Product: [...newState],
      };
    }
    default:
      return stateOne;
  }
};

export { reducerFnOne };
