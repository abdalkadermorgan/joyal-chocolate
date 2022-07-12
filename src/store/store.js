import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import data from "../components/data.json";
export const actionTypes = {
  setAddedBox: "[setAddedBox] Action",
  setAddedChocolate: "[{setAddedChocolate}] Action",
  setAddedFilling: "[setAddedFilling] Action",
  setAddedMerge: "[setAddedMerge] Action",
};

const initialState = {
  cart: {
    // id: data.box_type[0].id,
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
  // totalAmount: parseInt(0),
};

export const reducer = persistReducer(
  {
    storage,
    key: "root",
    debug: true,
    whitelist: ["cart", "totalAmount"],
  },
  (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.setAddedBox: {
        const dataBoxType = action.payload.data;
        const newBox = (state.cart = {
          id: dataBoxType.id,
          title: dataBoxType.title,
          price: parseInt(dataBoxType.price),
          box_number: dataBoxType.box_number,
          chocolate_type: [],
        });
        state.totalAmount = parseInt(newBox.price);
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
                price: parseInt(dataChocolateType.price),
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
          // const AmountWithChcolate = state.cart.chocolate_type.reduce((total, item)=> {
          //   return total + item.price
          // }, 0);
          // state.totalAmount = state.totalAmount + AmountWithChcolate;
          // const amountWithChcolate = state.cart.chocolate_type.map((e) => {
          //   let q = 0
          //  return  q = q + e.price
          // } )
          // console.log("!existingItem",amountWithChcolate );
        } else {
          // const amountDelChocolate = state.cart.chocolate_type.map((e) => e.price )
          // console.log("existingItem", amountDelChocolate);
          // state.totalAmount = state.totalAmount - amountDelChocolate;
          const test = state.cart.chocolate_type.filter(
            (e) => e.id !== dataChocolateType.id
          );
          state.cart = {
            ...state.cart,
            chocolate_type: test,
          };
        }
        if (TypeBox === 1 && state.cart.chocolate_type.length > 1) {
          state.cart.chocolate_type.shift();
        } else if (TypeBox === 2 && state.cart.chocolate_type.length > 2) {
          // const a = state.cart.chocolate_type.map(e => e)
          // state.totalAmount = state.totalAmount - a[0].price;
          // console.log("type a", a[0].price);
          state.cart.chocolate_type.shift();
        } else if (TypeBox === 3 && state.cart.chocolate_type.length > 3) {
          state.cart.chocolate_type.shift();
        }
        // state.totalAmount = state.cart.chocolate_type.map(e => parseInt(state.totalAmount) + parseInt(e.price))
        // const s = state.cart.chocolate_type.reducer((total, item) => {
        //   return total + item.price;
        // })
        // const s = state.cart.chocolate_type.reduce((total, item) => {
        //   return total + item.price;
        // }, 0)

        // const s = state.cart.chocolate_type.map((e) => {
        //   let sum = 0;
        //   return sum= sum + e.price
        // })
        // console.log("s", s);

        // state.totalAmount = state.totalAmount + s;

        // console.log("sum =>", state.totalAmount);
        // state.cart.chocolate_type.reduce((total, item) => {
        //   return state.totalAmount = total + item.price;
        // }, state.totalAmount)
        // console.log("ttt", state.totalAmount);
        // state.cart.chocolate_type.forEach(element => {
        //   state.totalAmount +=  element.price
        // });
        // console.log("sum =>", state.totalAmount);
        // state.totalAmount = sum;
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
        const type_id = action.payload.type_id;
        const merge = action.payload.marge;
        console.log("margee", merge);
        const newMerge = state.cart.chocolate_type.map((e) => {
          if (e.id === type_id) {
            e = {
              ...e,
              filling_type: {
                ...e.filling_type,
                merge: {
                  id: merge.id,
                  name: merge.name,
                  price: merge.price,
                },
              },
            };
          }
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

  setAddedMerge: ({ marge, type_id }) => {
    return {
      type: actionTypes.setAddedMerge,
      payload: { marge, type_id },
    };
  },
};
