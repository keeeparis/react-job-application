import React from 'react'
import * as ReactDOMClient from 'react-dom/client'
import 'antd/dist/antd.css';
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './redux/store'

const container = document.getElementById('root') as HTMLDivElement
ReactDOMClient
    .createRoot(container)
    .render(
        <Provider store={store}>
            <App />
        </Provider>
    )
