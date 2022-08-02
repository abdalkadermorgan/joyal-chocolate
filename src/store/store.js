import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
export const actionTypes = {
  setAddedBox: "[setAddedBox] Action",
  setAddedChocolate: "[{setAddedChocolate}] Action",
  setAddedFilling: "[setAddedFilling] Action",
  setAddedMerge: "[setAddedMerge] Action",
  setAddForm: "[setAddForm] Action",
  setAddGiftMessage: "[setAddGiftMessage] Action",
  resetCart: "[resetCart] Action",
  setOrderNumber: "[setOrderNumber] Action",
};

const initialState = {
  cart: { },
  order_number: null,
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
        const newBox = (state.cart = {
          box_id: dataBoxType.id,
          title: dataBoxType.name,
          price: parseInt(dataBoxType.price),
          types_count: dataBoxType.types_count,
          types: [],
        });
        state.cart.totalAmount = parseInt(newBox.price);
        return { ...state };
      }

      case actionTypes.setAddedChocolate: {
        const dataChocolateType = action.payload.data;
        const TypeBox = state.cart.types_count;
        const existingItem = state.cart.types.find(
          (item) => item.chocolate_type_id === dataChocolateType.id
        );
        if (!existingItem) {
          state.cart = {
            ...state.cart,
            types: [
              ...state.cart.types,
              {
                chocolate_type_id: dataChocolateType.id,
                name: dataChocolateType.name,
                price: parseInt(dataChocolateType.price),
                filling_id: {
                  id: -1,
                  name: "",
                  type_id: -1,
                  price: 0,
                },
                merge_id: {
                  id: -1,
                  name: "",
                  price: 0,
                },
              },
            ],
          };
        } else {
          const newChocolateType = state.cart.types.filter(
            (e) => e.chocolate_type_id !== dataChocolateType.id
          );
          state.cart = {
            ...state.cart,
            types: newChocolateType,
          };
        }
        if (TypeBox === 1 && state.cart.types.length > 1) {
          state.cart.types.shift();
        } else if (TypeBox === 2 && state.cart.types.length > 2) {
          state.cart.types.shift();
        } else if (TypeBox === 3 && state.cart.types.length > 3) {
          state.cart.types.shift();
        }
        const totalAmount = () => {
          const totalAmountChocolate = state.cart.types.reduce(
            (total, item) => {
              return total + item.price;
            },
            0
          );
          return state.cart.price + totalAmountChocolate;
        };
        state.cart.totalAmount = totalAmount();
        return { ...state };
      }

      case actionTypes.setAddedFilling: {
        const type_id = action.payload.type_id;
        const filling_chocolate = action.payload.filling;
        const newFilling = state.cart.types.map((e) => {
          if (e.chocolate_type_id === type_id) {
            e = {
              ...e,
              filling_id: {
                id: filling_chocolate.id,
                name: filling_chocolate.name,
                price: filling_chocolate.price,
                type_id: type_id,
              },
              merge_id: {
                id: -1,
                name: "",
                price: 0,
              },
            };
          }
          return e;
        });
        state.cart = {
          ...state.cart,
          types: newFilling,
        };
        const totalAmount = () => {
          const totalAmountChocolate = state.cart.types.reduce(
            (total, item) => {
              return total + item.price;
            },
            0
          );

          const priceFillingType = state.cart.types.map(
            (e) => e.filling_id.price
          );

          const totalAmountFilling = priceFillingType.reduce((total, item) => {
            return total + item;
          }, 0);
          return state.cart.price + totalAmountChocolate + totalAmountFilling;
        };
        state.cart.totalAmount = totalAmount();

        return { ...state };
      }

      case actionTypes.setAddedMerge: {
        const type_id = action.payload.type_id;
        const merge = action.payload.marge;
        const newMerge = state.cart.types.map((e) => {
          if (e.chocolate_type_id === type_id) {
            e = {
              ...e,
              merge_id: {
                id: merge.id,
                name: merge.name,
                price: merge.price,
              },
            };
          }
          return e;
        });

        state.cart = {
          ...state.cart,
          types: newMerge,
        };
        const totalAmount = () => {
          const totalAmountChocolate = state.cart.types.reduce(
            (total, item) => {
              return total + item.price;
            },
            0
          );

          const priceFillingType = state.cart.types.map(
            (e) => e.filling_id.price
          );

          const totalAmountFilling = priceFillingType.reduce((total, item) => {
            return total + item;
          }, 0);
          const priceMerge = state.cart.types.map((e) => e.merge_id.price);
          const totalAmountMerge = priceMerge.reduce((total, item) => {
            return total + item;
          }, 0);
          return (
            state.cart.price +
            totalAmountChocolate +
            totalAmountFilling +
            totalAmountMerge
          );
        };

        state.cart.totalAmount = totalAmount();

        return { ...state };
      }

      case actionTypes.setAddForm: {
        const fullname = action.payload.fullname;
        const phone = action.payload.phone;
        const email = action.payload.email;
        const country = action.payload.country;
        const city = action.payload.city;
        const address = action.payload.address;
        state.cart = {
          ...state.cart,
          fullname: fullname,
          phone: phone,
          email: email,
          country: country,
          city: city,
          address: address,
        };
        return { ...state };
      }
      case actionTypes.setAddGiftMessage: {
        const senderName = action.payload.senderName;
        const message = action.payload.message;
        state.cart = {
          ...state.cart,
          senderName: senderName,
          message: message,
        };
        return { ...state };
      }


      case actionTypes.setOrderNumber: {
        const orederNumber = action.payload.orderNumber;
        state.order_number = orederNumber;
        return { ...state };
      }

      case actionTypes.resetCart: {
        state.cart = {};
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
  
  setAddForm: (fullname, phone, email, country, city, address) => {
    return {
      type: actionTypes.setAddForm,
      payload: { fullname, phone, email, country, city, address },
    };
  },

  setAddGiftMessage: (senderName, message) => {
    return {
      type: actionTypes.setAddGiftMessage,
      payload: { senderName, message },
    };
  },

  setOrderNumber: (orderNumber) => {
    return {
      type: actionTypes.setOrderNumber,
      payload: { orderNumber },
    };
  },

  resetCart: (cart) => {
    return {
      type: actionTypes.resetCart,
      payload: { cart },
    };
  },
};
