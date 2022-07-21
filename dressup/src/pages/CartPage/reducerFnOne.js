const reducerFnOne = (stateOne, action) => {
  switch (action.type) {
    case "addProToCart": {
      const totalPrice = action.payload.reduce((acc, item) => {
        return acc + item.qty * item.discountPrice;
      }, 0);

      console.log("added to Cart");
      console.log("Cart Contents", action.payload);

      return {
        ...stateOne,
        CartTotal: totalPrice,
        CartCount: action.payload.length,
        Cart: action.payload,
      };
    }
    case "addProToWish": {
      return {
        ...stateOne,
        WishListItems: action.payload.length,
        Wishlist: action.payload,
      };
    }
    case "removeFromCart": {
      const totalPrice = action.payload.reduce((acc, item) => {
        return acc + item.qty * item.discountPrice;
      }, 0);

      return {
        ...stateOne,
        CartTotal: totalPrice,
        CartCount: action.payload.length,
        Cart: action.payload,
      };
    }
    case "removeFromWish": {
      return {
        ...stateOne,
        WishListItems: action.payload.length,
        Wishlist: action.payload,
      };
    }

    default:
      return stateOne;
  }
};

export { reducerFnOne };
