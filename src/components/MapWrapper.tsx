import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import RoutingMachine from './RoutingMachine'

const MapWrapper = () => {
    return (
        <>
            <MapContainer 
                center={[51.505, -0.09]} 
                zoom={13} 
                style={{ height: '400px' }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                {/* <Marker position={[51.505, -0.09]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker> */}
                <RoutingMachine />
            </MapContainer>
        </>
    )
}

export default MapWrapper