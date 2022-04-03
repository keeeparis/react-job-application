import React from 'react'
import * as ReactDOMClient from 'react-dom/client'
import { Provider } from 'react-redux'

import App from './App'
import { store } from './redux/store'

import 'antd/dist/antd.css';
import './index.css'

const container = document.getElementById('root') as HTMLDivElement
ReactDOMClient
    .createRoot(container)
    .render(
        <Provider store={store}>
            <App />
        </Provider>
    )
