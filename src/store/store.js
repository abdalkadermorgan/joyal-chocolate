import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export const actionTypes = {
  SetAddedCart: "[SetAddedCart] Action",
};

const initialState = {
  cart: [],
};

export const reducer = persistReducer(
  {
    storage,
    key: "root",
    debug: true,
    whitelist: ["cart"],
  },
  (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.SetAddedCart: {
        const cart = action.payload.cart;

        return { ...state, cart };
      }

      default:
        return state;
    }
  }
);

export const Actions = {
  SetAddedCart: (cart) => {
    return {
      type: actionTypes.SetAddedCart,
      payload: { cart },
    };
  },
};