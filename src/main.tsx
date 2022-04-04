import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import L from 'leaflet'

import App from './App'
import { store } from './redux/store'

import './index.less'

import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'

// defining marker images, because in prod
// images fail to load from leaflet/dist
const DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25,41],
    iconAnchor: [12,41]
})

L.Marker.prototype.options.icon = DefaultIcon;

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)