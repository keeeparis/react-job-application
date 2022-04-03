import { MapContainer, TileLayer } from 'react-leaflet'
import RoutingMachine from './RoutingMachine'

const MapWrapper = () => {
    return (
        <>
            <MapContainer 
                center={[51.555, -0.09]} 
                zoom={11} 
                style={{ height: '400px' }}
                
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <RoutingMachine />
            </MapContainer>
        </>
    )
}

export default MapWrapper