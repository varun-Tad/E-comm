import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import WishlistDataService from "../../utils/firebaseServices/wishlist.services";

let newCart = [];
let newWishlist = [];
let arrFromDb = [];

const addToWishList = async (ele) => {
  try {
    const data = await WishlistDataService.addWishlist(ele);
  } catch (err) {
    console.log(err.message);
  }
};

const deleteFromWishList = async (ele) => {
  try {
    await WishlistDataService.deleteWishlist();
  } catch (err) {
    alert(err.message);
  }
};

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

      const totalPrice = newCartArr.reduce((acc, item) => {
        return acc + item.quantity * item.discountPrice;
      }, 0);

      return {
        ...stateOne,
        CartTotal: totalPrice,
        CartCount: newCartArr.length,
        Cart: [...newCartArr],
      };
    }
    case "addProToWish": {
      toast.success("Item added to Wishlist", {
        autoClose: 3000,
      });

      addToWishList(action.value);

      console.log("newWishlist", newWishlist);

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

      const totalPrice = newCartArr.reduce((acc, item) => {
        return acc + item.quantity * item.discountPrice;
      }, 0);
      toast.success("Item removed from Cart", {
        autoClose: 3000,
      });
      return {
        ...stateOne,
        CartTotal: totalPrice,
        CartCount: newCartArr.length,
        Cart: [...newCartArr],
      };
    }
    case "removeFromWish": {
      toast.success("Item removed from Wishlist", {
        autoClose: 3000,
      });

      deleteFromWishList(action.value);

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

      toast.success("Item moved from Wishlist", {
        autoClose: 3000,
      });
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

      const totalPrice = newCartArr.reduce((acc, item) => {
        return acc + item.quantity * item.discountPrice;
      }, 0);

      toast.success("Item moved from Cart", {
        autoClose: 3000,
      });
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
        return acc + item.quantity * item.discountPrice;
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
        return acc + item.quantity * item.discountPrice;
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
