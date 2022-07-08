import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


export const actionTypes = {
  setAddedBox: "[setAddedBox] Action",
  setAddedChocolate: "[setAddedChocolate] Action",
  setAddedFilling: "[setAddedFilling] Action",
};

const initialState = {
  cart: {
    id: -1,
    title: "",
    box_number: -1,
    price: 0,
    chocolate_type: [
      {
        id: -1,
        name: "",
      },
    ],
    filling_type: [
      {
        id: -1,
        name: "",
        type_id: -1,
        merge: {},
      },
    ],
  },
};

export const reducer = persistReducer({
  storage,
  key: "root",
  debug: true,
  whitelist: ["cart"],
},
  (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.setAddedBox: {
        const cart = action.payload.cart;
        const existingBox = cart.id;
        
        return { ...state, cart };
      }

      case actionTypes.setAddedChocolate: {
        const cart = action.payload.cart;
        const TypeBox = cart.box_number;
        console.log("TypeBox =>", TypeBox);
        if(TypeBox === 1) {
          cart.chocolate_type.shift();
        } 
        if(TypeBox === 2 && cart.chocolate_type.length > 2) {
            cart.chocolate_type.shift();
        }
        if(TypeBox === 3 && cart.chocolate_type.length > 3) {
            cart.chocolate_type.shift();
          
        }
        return { ...state, cart };
      }

      case actionTypes.setAddedFilling: {
        const cart = action.payload.cart;
        const filling = cart.filling_type.map(e => e.type_id);
        if(filling.includes()) {
          cart.filling_type.shift();
          console.log("ee");
        }
        console.log("fff =>" , filling );
        // if(TypeBox === 2 && cart.filling_type.length > 2) {
        //     cart.filling_type.shift();
        // }
        // if(TypeBox === 3 && cart.filling_type.length > 3) {
        //     cart.filling_type.shift();
        // }
        return { ...state, cart };
      }

      default:
        return state;
    }
  },
);

export const Action = {
  setAddedBox : (cart) => {
    return {
      type: actionTypes.setAddedBox,
      payload: { cart }
    };
  },

  setAddedChocolate : (cart) => {
    return {
      type: actionTypes.setAddedChocolate,
      payload: { cart }
    };
  },

  setAddedFilling : (cart) => {
    return {
      type: actionTypes.setAddedFilling,
      payload: { cart }
    };
  },
}
