import { createControlComponent } from '@react-leaflet/core'
import L from 'leaflet'
import 'leaflet-routing-machine'

const createRoutingMachineLayer = (props: any) => {
    const { waypoints } = props

    return L.Routing.control({
        waypoints,
        lineOptions: {
            styles: [{ 
                color: "#6FA1EC", 
                weight: 4 
            }],
            extendToWaypoints: false,
            missingRouteTolerance: 2
        },
        show: false,
        fitSelectedRoutes: true,
        addWaypoints: false,
        showAlternatives: false,
        router: L.Routing.mapbox(import.meta.env.VITE_MAP_TOKEN, {})
    })
}

const RoutingMachine = createControlComponent(createRoutingMachineLayer)

export default RoutingMachine