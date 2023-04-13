import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import IrregularVerbsTableStore from './store/IrregularVerbsTableStore';
import IrregularVerbsStore from './store/IrregularVerbsStore';
import TablesStore from './store/TablesStore';

export const Context = createContext(null)
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Context.Provider value={
      {
        generalTable: new IrregularVerbsTableStore(),
        irregularVerbs: new IrregularVerbsStore(),
        tables: new TablesStore()
      }
    }>
      <App />
    </Context.Provider>
  </React.StrictMode >
);
