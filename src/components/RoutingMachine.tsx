import { createControlComponent } from '@react-leaflet/core'
import L from 'leaflet'
import 'leaflet-routing-machine'

const createRoutingMachineLayer = () => {
    const instance = L.Routing.control({
        waypoints: [
            L.latLng(51.505, -0.09),
            L.latLng(51.605, -0.19)
        ],
        lineOptions: {
            styles: [{ color: "#6FA1EC", weight: 4 }],
            extendToWaypoints: false,
            missingRouteTolerance: 2
        },
        show: false,
        routeWhileDragging: true,
        // fitSelectedRoutes: true,
        addWaypoints: false,
        showAlternatives: false
    })

    return instance
}

const RoutingMachine = createControlComponent(createRoutingMachineLayer)

export default RoutingMachine