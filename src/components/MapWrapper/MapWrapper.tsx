import { MapContainer, TileLayer } from 'react-leaflet'
import { useEffect, useMemo, useRef } from 'react'

import RoutingMachine from '../RoutingMachine'

import { useAppSelector } from '../../redux/hooks'
import { places } from '../../mock'
import { Wrapper } from './styles'

const MapWrapper = ({ mapSize }: { mapSize: string }) => {
    const rMachine = useRef<any>(null)
    const { from, to } = useAppSelector(state => state.routes.currentRoute)

    const coords = useMemo(() => {
        return {
            lat: places.filter(place => place.name === from)[0],
            lng: places.filter(place => place.name === to)[0],
        }
    }, [from, to])

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
                <RoutingMachine 
                    ref={rMachine} 
                    waypoints={[coords.lat.value, coords.lng.value]}
                />
            </MapContainer>
        </Wrapper>
    )
}

export default MapWrapper