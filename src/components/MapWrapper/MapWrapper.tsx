import { MapContainer, TileLayer } from 'react-leaflet'
import { useEffect, useMemo, useRef } from 'react'
import L from 'leaflet'

import iconShadow from 'leaflet/dist/images/marker-shadow.png'
import icon from 'leaflet/dist/images/marker-icon.png'
import RoutingMachine from '../RoutingMachine'

import { useAppSelector } from '../../redux/hooks'
import { places } from '../../mock'
import { Wrapper } from './styles'


// defining marker images, because in prod
// images fail to load from leaflet/dist
const DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25,41],
    iconAnchor: [12,41]
})

L.Marker.prototype.options.icon = DefaultIcon;

const MapWrapper = ({ mapSize }: { mapSize: string }) => {
    const rMachine = useRef<any>(null)
    const { key } = useAppSelector(state => state.routes.currentRoute)
    const route = useAppSelector(state => state.routes.routes.filter(route => route.key === key))[0]
    
    const coords = useMemo(() => {
        return {
            lat: places.filter(place => place.name === route?.from)[0],
            lng: places.filter(place => place.name === route?.to)[0],
        }
    }, [route])

    useEffect(() => {
        if (rMachine.current) {
            rMachine.current.setWaypoints([coords.lat.value, coords.lng.value])
        }
    }, [rMachine, coords])

    return (
        <Wrapper 
            mapSize={mapSize}
        >
            <MapContainer 
                center={[51.555, -0.09]} 
                zoom={11}
                className='mapContainer'
                
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {coords.lat && coords.lng && 
                    <RoutingMachine 
                        ref={rMachine} 
                        waypoints={[coords.lat.value, coords.lng.value]}
                    />
                }
            </MapContainer>
        </Wrapper>
    )
}

export default MapWrapper