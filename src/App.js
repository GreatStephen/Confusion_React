import React, { Component } from 'react';
import Main from './components/MainComponent';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

// at the entry of the whole program, get the default store
// the default value is DISHES, PROM, LEAD, COM from js files
const store = ConfigureStore();
class App extends Component {

  render() {
    return (
      // provide this store to the whole application
      <Provider store={store}> 
        <BrowserRouter>
          <div>
            <Main />
          </div>
        </BrowserRouter>

      </Provider>
    );

  }
}

export default App;
