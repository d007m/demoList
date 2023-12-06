// actions.js
export const login = (user) => ({
    type: 'LOGIN',
    payload: user,
  });
  
  export const logout = () => ({
    type: 'LOGOUT',
  });
  
  export const setItems = (items) => ({
    type: 'SET_ITEMS',
    payload: items,
  });
  export const addItem = (item) => {
    return {
      type: 'ADD_ITEM',
      payload: item,
    };
  };
  