const reducerFnOne = (stateOne, action) => {
  switch (action.type) {
    case "addProToCart": {
      let newCartArr = [];
      const existingItem = stateOne.Cart.find(
        (item) => item.id === action.value.id
      );

      if (existingItem) {
        newCartArr = stateOne.Cart.map((item) =>
          item.id === action.value.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        newCartArr = [...stateOne.Cart, { ...action.value, quantity: 1 }];
      }

      // const totalQuantity = newCartArr.reduce((acc, ItemObj) => {
      //   return acc + ItemObj.quantity;
      // }, 0);

      const totalPrice = newCartArr.reduce((acc, item) => {
        return acc + item.quantity * item.price.discountPrice;
      }, 0);

      console.log("totalPrice", totalPrice, typeof totalPrice);

      return {
        ...stateOne,
        CartTotal: totalPrice,
        CartCount: newCartArr.length,
        Cart: [...newCartArr],
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
      let newCartArr = [];

      newCartArr = stateOne.Cart.filter(
        (ele) => ele.brand !== action.value.brand
      );

      // const totalQuantity = newCartArr.reduce((acc, ItemObj) => {
      //   return acc + ItemObj.quantity;
      // }, 0);

      const totalPrice = newCartArr.reduce((acc, item) => {
        return acc + item.quantity * item.price.discountPrice;
      }, 0);

      return {
        ...stateOne,
        CartTotal: totalPrice,
        CartCount: newCartArr.length,
        Cart: [...newCartArr],
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
      const newCartArr = stateOne.Cart.filter(
        (ele) => ele.brand !== action.value.brand
      );

      // const totalQuantity = newCartArr.reduce((acc, ItemObj) => {
      //   return acc + ItemObj.quantity;
      // }, 0);

      return {
        ...stateOne,
        CartCount: newCartArr.length,
        WishListItems: stateOne.WishListItems + 1,
        Cart: [...newCartArr],
        Wishlist: [...stateOne.Wishlist, action.value],
      };
    }
    case "moveToCart": {
      let newCartArr = [];
      if (!action.value.quantity) {
        action.value.quantity = 1;
      }
      newCartArr = [...stateOne.Cart, action.value];

      // const totalQuantity = newCartArr.reduce((acc, ItemObj) => {
      //   return acc + ItemObj.quantity;
      // }, 0);

      const totalPrice = newCartArr.reduce((acc, item) => {
        return acc + item.quantity * item.price.discountPrice;
      }, 0);

      return {
        ...stateOne,
        CartTotal: totalPrice,
        CartCount: newCartArr.length,
        WishListItems: stateOne.WishListItems - 1,
        Wishlist: stateOne.Wishlist.filter((ele) => {
          return ele.brand !== action.value.brand;
        }),
        Cart: [...newCartArr],
      };
    }
    case "inc": {
      let newCartArr = [];

      newCartArr = stateOne.Cart.map((item) =>
        item.id === action.value.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

      const totalPrice = newCartArr.reduce((acc, item) => {
        return acc + item.quantity * item.price.discountPrice;
      }, 0);

      return {
        ...stateOne,
        CartTotal: totalPrice,
        Cart: [...newCartArr],
      };
    }
    case "dec": {
      let newCartArr = [];

      if (action.value.quantity === 1) {
        newCartArr = stateOne.Cart.filter((ele) => ele.id !== action.value.id);
      } else {
        newCartArr = stateOne.Cart.map((item) =>
          item.id === action.value.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }

      const totalPrice = newCartArr.reduce((acc, item) => {
        return acc + item.quantity * item.price.discountPrice;
      }, 0);

      return {
        ...stateOne,
        CartTotal: totalPrice,
        Cart: [...newCartArr],
      };
    }
    default:
      return stateOne;
  }
};

export { reducerFnOne };
