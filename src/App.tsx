import React, { useEffect, useState } from 'react'
import { Layout, Table } from 'antd'
import { columns, dataSource } from './mock'
import MapWrapper from './components/MapWrapper'
import { useAppDispatch, useAppSelector } from './redux/hooks'
import { setCurrentRoute, setRoutes } from './redux/features/route/routeSlice'

const { Header, Footer, Sider, Content } = Layout

export interface DataType {
    key: React.Key,
    id: number,
    from: string,
    to: string
}

function App() {
    const dispatch = useAppDispatch()
    const data = useAppSelector(state => state.routes.routes)

    const rowSelectionOptions = {
        onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
            dispatch(setCurrentRoute(selectedRowKeys[0]))
        }
    }

    useEffect(() => {
        dispatch(setRoutes(dataSource))
    }, [dispatch])

    return (
        <Layout>
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
                    />
                </Content>
                <Footer>Владимир Троценко, 2022</Footer>
            </Layout>
            <Sider width={500}>
                <MapWrapper />
            </Sider>
        </Layout>
    )
}

export default App
