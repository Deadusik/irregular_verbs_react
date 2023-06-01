import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import TablesStore from './store/TablesStore';
import { BrowserRouter } from 'react-router-dom'
//stores 
import IrregularVerbsTableStore from './store/IrregularVerbsTableStore';
import IrregularVerbsStore from './store/IrregularVerbsStore';
import UserStore from './store/UserStore';


export const Context = createContext(null)
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Context.Provider value={
        {
          generalTable: new IrregularVerbsTableStore(),
          irregularVerbs: new IrregularVerbsStore(),
          tables: new TablesStore(),
          user: new UserStore()
        }
      }>
        <App />
      </Context.Provider>
    </BrowserRouter>
  </React.StrictMode >
);
