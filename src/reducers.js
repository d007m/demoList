import itemsData from './items.json'; // Import data

const initialState = {
    user: null,
    items: itemsData.items,
  };
  
  export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN':
        return { ...state, user: action.payload };
      case 'LOGOUT':
        return { ...state, user: null };
      case 'SET_ITEMS':
        return { ...state, items: action.payload };
      case 'ADD_ITEM':
        console.log(action.payload);
        return {...state, items:[...state.items, action.payload]};
      default:
        return state;
    }
  };
  