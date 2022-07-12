import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export const actionTypes = {
  setAddedBox: "[setAddedBox] Action",
  setAddedChocolate: "[{setAddedChocolate}] Action",
  setAddedFilling: "[setAddedFilling] Action",
  setAddedMerge: "[setAddedMerge] Action",
};

const initialState = {
  cart: {
    // id: -1,
    // title: "",
    // box_number: -1,
    // price: 0,
    // chocolate_type: [
    //   {
    //     id: -1,
    //     name: "",
    //     filling_type: {
    //       id: -1,
    //       name: "",
    //       type_id: -1,
    //       merge: {},
    //     },
    //   },
    // ],
  },
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
      case actionTypes.setAddedBox: {
        const dataBoxType = action.payload.data;
        state.cart = {
          id: dataBoxType.id,
          title: dataBoxType.title,
          price: dataBoxType.price,
          box_number: dataBoxType.box_number,
          chocolate_type: [],
        };
        return { ...state };
      }

      case actionTypes.setAddedChocolate: {
        const dataChocolateType = action.payload.data;
        const TypeBox = state.cart.box_number;
        const existingItem = state.cart.chocolate_type.find(
          (item) => item.id === dataChocolateType.id
        );
        if (!existingItem) {
          state.cart = {
            ...state.cart,
            chocolate_type: [
              ...state.cart.chocolate_type,
              {
                id: dataChocolateType.id,
                name: dataChocolateType.name,
                price: dataChocolateType.price,
                filling_type: {
                  id: -1,
                  name: "",
                  type_id: -1,
                  price: 0,
                  merge: {},
                },
              },
            ],
          };
        }else {
          console.log("error");
          console.log("1", state.cart.chocolate_type.filter((e) => e.id !== dataChocolateType.id));
          const test =state.cart.chocolate_type.filter((e) => e.id !== dataChocolateType.id)
          state.cart = {
            ...state.cart,
            chocolate_type: test
          }
        }
        if (TypeBox === 1) {
          state.cart.chocolate_type.shift();
        } else if (TypeBox === 2 && state.cart.chocolate_type.length > 2) {
          state.cart.chocolate_type.shift();
        } else if (TypeBox === 3 && state.cart.chocolate_type.length > 3) {
          state.cart.chocolate_type.shift();
        }
        return { ...state };
      }

      case actionTypes.setAddedFilling: {
        const type_id = action.payload.type_id;
        const filling_chocolate = action.payload.filling;
        const newFilling = state.cart.chocolate_type.map((e) => {
          if (e.id === type_id) {
            e = {
              ...e,
              filling_type: {
                id: filling_chocolate.id,
                name: filling_chocolate.name,
                price: filling_chocolate.price,
                type_id: type_id,
                merge: {},
              },
            };
          }
          return e;
        });
        state.cart = {
          ...state.cart,
          chocolate_type: newFilling,
        };
        return { ...state };
      }

      case actionTypes.setAddedMerge: {
        const merge = action.payload.marge;
        console.log("margee", merge);
        const newMerge = state.cart.chocolate_type.map((e) => {
          // if (e.id === type_id) {
          e = {
            ...e,
            filling_type: {
              ...e.filling_type,
              merge: {
                name: merge.name
              }
            }
          };
          // }
          return e;
        });

        state.cart = {
          ...state.cart,
          chocolate_type: newMerge,
        };

        return { ...state };
      }

      default:
        return state;
    }
  }
);

export const Action = {
  setAddedBox: (data) => {
    return {
      type: actionTypes.setAddedBox,
      payload: { data },
    };
  },

  setAddedChocolate: (data) => {
    return {
      type: actionTypes.setAddedChocolate,
      payload: { data },
    };
  },

  setAddedFilling: ({ filling, type_id }) => {
    return {
      type: actionTypes.setAddedFilling,
      payload: { filling, type_id },
    };
  },

  setAddedMerge: ({ marge }) => {
    return {
      type: actionTypes.setAddedMerge,
      payload: { marge },
    };
  },
};
