// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store'; // Import Redux store
import AppNavigator from './AppNavigator';

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
