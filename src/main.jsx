import React from 'react'
import ReactDOM from 'react-dom/client'

//import App from './App.jsx'
//import { CounterApp } from './01-useState/CounterApp.jsx'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook.jsx'
// import { SimpleForm } from './02-useEffect/SimpleForm.jsx'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook.jsx'
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks.jsx'
// import { FocusScreen } from './04-useRef/FocusScreen.jsx'
// import { PlayVideo } from './04-useRef/PlayVideo'
// import { PlayVideoWithRef } from './04-useRef/PlayVideoWithRef'
// import { Memorize } from './06-memo_function/Memorize'
// import { MemoHook } from './07-useMemo/MemoHook'
// import { CallbackHook } from './08-useCallback/CallbackHook'
import { Padre } from './09-tarea-memo/Padre'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <CounterApp /> */}
    {/* <CounterWithCustomHook /> */}
    {/* <SimpleForm /> */}
    {/* <FormWithCustomHook /> */}
    {/* <MultipleCustomHooks /> */}
    {/* <FocusScreen /> */}
    {/* <PlayVideo /> */}
    {/* <PlayVideoWithRef /> */}
    {/* <Memorize /> */}
    {/* <MemoHook /> */}
    {/* <CallbackHook /> */}
    <Padre />
  </React.StrictMode>,
)
