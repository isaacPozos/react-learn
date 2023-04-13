import React from 'react'
import ReactDOM from 'react-dom/client'
// import { HooksApp } from './HooksApp'
// import { CounterApp } from './01-useState/CounterApp'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { FormCustomHook } from './02-useEffect/FormCustomHook'
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
// import { FocusScreen } from './04-useRef/FocusScreen';
// import { Memorize } from './06-memos/Memorize';
// import { MemorizeHook } from './06-memos/MemorizeHook';
// import { CallbackHook } from './06-memos/CallbackHook';
// import { TodoApp } from './08-useReducer/TodoApp';
// import { MainApp } from './09-useContext/MainApp';

import { RouterProvider } from 'react-router-dom';
import { router } from './09-useContext/router/Router';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <MainApp /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
