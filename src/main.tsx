import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import './index.less'

import App from './App'
import { store } from './redux/store'

        /* React 18 */
// const container = document.getElementById('root') as HTMLDivElement
// ReactDOMClient
//     .createRoot(container)
//     .render(
//         <Provider store={store}>
//             <React.StrictMode>
//                 <App />
//             </React.StrictMode>
//         </Provider>
//     )

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)