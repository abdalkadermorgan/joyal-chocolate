import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export const actionTypes = {
  SetAddedCart: "[SetAddedCart] Action",
};

const initialState = {
    cart :
      {
        id: -1,
        title: "",
        box_number: -1,
        price: 0,
        chocolate_type: [
          {
            id: -1,
            name: "",
            filling_type: [
              {
                id: -1,
                name: "",
                type_id: -1,
                merge: {}
              }
            ]
          }
        ]
       
      }
    
};
// console.log(initialState.cart.box_type.box_number);

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