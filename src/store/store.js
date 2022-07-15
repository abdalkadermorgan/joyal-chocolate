import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
export const actionTypes = {
  setAddedBox: "[setAddedBox] Action",
  setAddedChocolate: "[{setAddedChocolate}] Action",
  setAddedFilling: "[setAddedFilling] Action",
  setAddedMerge: "[setAddedMerge] Action",
  setAddForm: "[setAddForm] Action",
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
  totalAmount: parseInt(0),
  formInformation: {}
};

export const reducer = persistReducer(
  {
    storage,
    key: "root",
    debug: true,
    whitelist: ["cart", "totalAmount", "formInformation"],
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
                  merge: {
                    id: -1,
                  name: '',
                  price: 0,
                  },
                },
              },
            ],
          };
        } else {
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
          state.cart.chocolate_type.shift();
        } else if (TypeBox === 3 && state.cart.chocolate_type.length > 3) {
          state.cart.chocolate_type.shift();
        }
        const totalAmount = () => {
          const totalAmountChocolate = state.cart.chocolate_type.reduce((total, item) => {
            return total + item.price
          }, 0)
          return state.cart.price + totalAmountChocolate;
        }
        state.totalAmount = totalAmount();
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
                merge: {
                  id: -1,
                  name: '',
                  price: 0,
                },
              },
            };
          }
          return e;
        });
        state.cart = {
          ...state.cart,
          chocolate_type: newFilling,
        };
        const totalAmount = () => {
          const totalAmountChocolate = state.cart.chocolate_type.reduce((total, item) => {
            return total + item.price;
          }, 0);

          const priceFillingType = state.cart.chocolate_type.map(
            (e) => e.filling_type.price
          );
  
          const totalAmountFilling = priceFillingType.reduce((total, item) => {
            return total + item;
          }, 0);
          return state.cart.price + totalAmountChocolate + totalAmountFilling
        }
        state.totalAmount = totalAmount();

        return { ...state };
      }

      case actionTypes.setAddedMerge: {
        const type_id = action.payload.type_id;
        const merge = action.payload.marge;
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
        const totalAmount = () => {
          const totalAmountChocolate = state.cart.chocolate_type.reduce((total, item) => {
            return total + item.price;
          }, 0);

          const priceFillingType = state.cart.chocolate_type.map(
            (e) => e.filling_type.price
          );
  
          const totalAmountFilling = priceFillingType.reduce((total, item) => {
            return total + item;
          }, 0);
          const priceMerge = state.cart.chocolate_type.map(
            (e) => e.filling_type.merge.price
          );
          const totalAmountMerge = priceMerge.reduce((total, item) => {
            return total + item;
          }, 0);
          return state.cart.price + totalAmountChocolate + totalAmountFilling + totalAmountMerge
        }

        state.totalAmount = totalAmount();

        return { ...state };
      }

      case actionTypes.setAddForm: {
        const form = action.payload.form;
        state.formInformation = form
        return {...state };
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
  setAddForm: (form) => {
    return {
      type: actionTypes.setAddForm,
      payload: { form },
    };
  },


};
