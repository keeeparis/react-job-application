import React, { useEffect, useState } from 'react'
import { Layout, Table } from 'antd'
import SplitterLayout from 'react-splitter-layout'

import MapWrapper from './components/MapWrapper/MapWrapper'

import { columns, dataSource } from './mock'
import { useAppDispatch, useAppSelector } from './redux/hooks'
import { setCurrentRoute, setRoutes } from './redux/features/route/routeSlice'

const { Header, Footer, Sider, Content } = Layout

function App() {
    const [mapSize, setMapSize] = useState('500px')

    const data = useAppSelector(state => state.routes.routes)
    const dispatch = useAppDispatch()

    const rowSelectionOptions = {
        onChange: (selectedRowKeys: React.Key[]) => {
            dispatch(setCurrentRoute(selectedRowKeys[0]))
        }
    }

    const handleMapSizeChange = (value: number) => {
        setMapSize(`${value}px`)
    }

    useEffect(() => {
        dispatch(setRoutes(dataSource))
    }, [dispatch])

    return (
        <Layout>
            <SplitterLayout 
                secondaryInitialSize={500}
                primaryMinSize={500}
                secondaryMinSize={500}
                onSecondaryPaneSizeChange={handleMapSizeChange}
            >
                <Layout>
                    <Header>React Application Leaflet</Header>
                    <Content>
                        <Table 
                            rowSelection={{
                                type: 'radio',
                                ...rowSelectionOptions
                            }}
                            dataSource={data} 
                            columns={columns} 
                            pagination={false}
                            scroll={{ x: 800 }}
                        />
                    </Content>
                    <Footer>Владимир Троценко, 2022</Footer>
                </Layout>
                <Sider width={500}>
                    <MapWrapper mapSize={mapSize} />
                </Sider>
            </SplitterLayout>
        </Layout>
    )
}

export default App
