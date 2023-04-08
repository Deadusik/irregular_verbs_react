import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import IrregularVerbsTableStore from './store/IrregularVerbsTableStore';
import IrregularVerbsStore from './store/IrregularVerbsStore';

export const Context = createContext(null)
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Context.Provider value={
      {
        irregularVerbsTable: new IrregularVerbsTableStore(),
        irregularVerbs: new IrregularVerbsStore()
      }
    }>
      <App />
    </Context.Provider>
  </React.StrictMode >
);
