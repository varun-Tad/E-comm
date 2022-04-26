const addFunc = (state, item) => {
  const objIndex = state.findIndex((obj) => obj.id === item.id);

  state[objIndex].quantity = item.quantity + 1;
  console.log(item.price.discountPrice);
  item.TotalItemPrice = item.quantity * item.price.discountPrice;
  console.log(state);
  return state;
};

const subFunc = (stateOne, state, item) => {
  const objIndex = state.findIndex((obj) => obj.id === item.id);
  if (state[objIndex].quantity === 2) {
    stateOne.CartItems = stateOne.CartItems - 1;
    state[objIndex].quantity = 0;
    stateOne.Cart = stateOne.Cart.filter((val) => val.brand !== item.brand);
    if (item.brand === "U.S. Polo Assn") {
      item.TotalItemPrice = 2000;
    } else if (item.brand === "U.S. Polo Assn. Denim Co.") {
      item.TotalItemPrice = 1759;
    } else if (item.brand === "H&M Women Pink Collared Top") {
      item.TotalItemPrice = 800;
    } else if (item.brand === "U.S. Polo Assn. Denims Co") {
      item.TotalItemPrice = 2699;
    } else if (item.brand === "DressBerry Women Mauve Analogue Watch") {
      item.TotalItemPrice = 1084;
    } else if (item.brand === "Men Brown Factory Serviced Analogue Watch") {
      item.TotalItemPrice = 6597;
    } else if (item.brand === "Men Red Rev T Analogue Watch") {
      item.TotalItemPrice = 2000;
    } else if (item.brand === "Men Teal Blue Polo Collar Cotton Pure Cotton") {
      item.TotalItemPrice = 714;
    } else {
      item.TotalItemPrice = 2000;
    }
  } else {
    state[objIndex].quantity = item.quantity - 1;
    item.TotalItemPrice = item.quantity * item.price.discountPrice;
  }

  return state;
};

const addCart = (passedState, item) => {
  const objIndex = passedState.findIndex((obj) => obj.id === item.id);
  // passedState[objIndex].quantity = 2;
  if (passedState[objIndex].brand === "U.S. Polo Assn") {
    passedState[objIndex].TotalItemPrice = 2000;
  } else if (passedState[objIndex].brand === "U.S. Polo Assn. Denim Co.") {
    passedState[objIndex].TotalItemPrice = 1759;
  } else if (passedState[objIndex].brand === "H&M Women Pink Collared Top") {
    passedState[objIndex].TotalItemPrice = 800;
  } else if (passedState[objIndex].brand === "U.S. Polo Assn. Denims Co") {
    passedState[objIndex].TotalItemPrice = 2699;
  } else if (
    passedState[objIndex].brand === "DressBerry Women Mauve Analogue Watch"
  ) {
    passedState[objIndex].TotalItemPrice = 1084;
  } else if (
    passedState[objIndex].brand === "Men Brown Factory Serviced Analogue Watch"
  ) {
    passedState[objIndex].TotalItemPrice = 6597;
  } else if (passedState[objIndex].brand === "Men Red Rev T Analogue Watch") {
    passedState[objIndex].TotalItemPrice = 2000;
  } else if (
    passedState[objIndex].brand ===
    "Men Teal Blue Polo Collar Cotton Pure Cotton"
  ) {
    passedState[objIndex].TotalItemPrice = 714;
  } else {
    passedState[objIndex].TotalItemPrice = 2000;
  }

  return passedState;
};

const reducerFnOne = (stateOne, action) => {
  switch (action.type) {
    case "addProToCart": {
      const theState = addCart(stateOne.Product, action.value);
      console.log("theState", theState);
      return {
        ...stateOne,
        TotalPrice: stateOne.TotalPrice + action.value.price.discountPrice,
        CartItems: stateOne.CartItems + 1,
        Cart: [...stateOne.Cart, action.value],
        // Product: [...theState],
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
        TotalPrice:
          stateOne.TotalPrice -
          action.value.price.discountPrice * action.value.quantity,
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
        TotalPrice:
          stateOne.TotalPrice -
          action.value.price.discountPrice * action.value.quantity,
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
        TotalPrice:
          stateOne.TotalPrice +
          action.value.price.discountPrice * action.value.quantity,
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
        TotalPrice: stateOne.TotalPrice + action.value.price.discountPrice,
        Product: [...newState],
      };
    }
    case "dec": {
      const newState = subFunc(stateOne, stateOne.Product, action.value);
      return {
        ...stateOne,
        TotalPrice: stateOne.TotalPrice - action.value.price.discountPrice,
        Product: [...newState],
      };
    }
    default:
      return stateOne;
  }
};

export { reducerFnOne };
