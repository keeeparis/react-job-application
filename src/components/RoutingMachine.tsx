import { createControlComponent } from '@react-leaflet/core'
import L from 'leaflet'
import 'leaflet-routing-machine'

const createRoutingMachineLayer = () => {
    const plan = new L.Routing.Plan(
        [
            L.latLng(51.505, -0.09),
            L.latLng(51.605, -0.19)
        ],  
        {
            draggableWaypoints: false,
        }
    )

    return L.Routing.control({
        lineOptions: {
            styles: [{ color: "#6FA1EC", weight: 4 }],
            extendToWaypoints: false,
            missingRouteTolerance: 2
        },
        show: false,
        fitSelectedRoutes: true,
        plan,
        addWaypoints: false,
        showAlternatives: false,
        router: L.Routing.mapbox(import.meta.env.VITE_MAP_TOKEN, {})
    })
}

const RoutingMachine = createControlComponent(createRoutingMachineLayer)

export default RoutingMachine