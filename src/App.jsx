import React from 'react';
import Todos from './components/todos/Todos';
import TodoProvider from './contexts/TodoContext';
import './assets/css/reset.css'

const AppProvider = ({ contexts, children }) => contexts.reduce(
  (prev, context) => React.createElement(context, {
    children: prev
  }), 
  children
);


const App = () => {
  return (
      <>
          <AppProvider contexts={[TodoProvider]}  >
            <div >
              {/* <Play /> */}
              <Todos />
              {/* <ColorContext />
              <Count /> */}
            </div>
          </AppProvider>
      </>
  );
};

export default App;