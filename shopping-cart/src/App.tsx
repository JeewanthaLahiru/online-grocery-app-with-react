import React from 'react';
import './App.css';
import './assets/styles/_main.scss';
import ClientApp from "./ClientApp";
import {Provider} from 'react-redux';
import {configureStore} from "./store";

function App() {

    const store = configureStore();

  return (
      <Provider store={store}>
          <div className="App">

              <ClientApp/>
          </div>
      </Provider>
  );
}

export default App;
