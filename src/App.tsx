import { useEffect, useState } from 'react'
import { Layout, Table } from 'antd'
import { columns, dataSource } from './mock'
import MapWrapper from './components/MapWrapper'

const { Header, Footer, Sider, Content } = Layout

function App() {
    return (
        <Layout>
            <Layout>
                <Header>Header</Header>
                <Content>
                    <Table 
                        dataSource={dataSource} 
                        columns={columns} 
                        pagination={false} 
                    />
                </Content>
                <Footer>
                    Footer
                </Footer>
            </Layout>
            <Sider width={500}>
                <MapWrapper />
            </Sider>
        </Layout>
    )
}

export default App
