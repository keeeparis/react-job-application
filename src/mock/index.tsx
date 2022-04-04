import { ColumnsType } from 'antd/lib/table'

import SelectItem from '../components/SelectItem'

import { DataType } from '../types'

export const places = [
    { value: [51.505, -0.09], name: 'Point A' },
    { value: [51.555, -0.03], name: 'Point B' },
    { value: [51.535, -0.05], name: 'Point C' },
    { value: [51.535, -0.07], name: 'Point D' },
    { value: [51.545, -0.04], name: 'Point E' },
]

export const dataSource: DataType[] = [
    {
        key: '1',
        id: 1,
        from: 'Point A',
        to: 'Point B',
    },
    {
        key: '2',
        id: 2,
        from: 'Point B',
        to: 'Point C',
    },
    {
        key: '3',
        id: 3,
        from: 'Point E',
        to: 'Point D',
    },
]

export const columns: ColumnsType<DataType> = [
    {
        title: 'Номер заявки',
        dataIndex: 'id',
        key: 'id',
        width: 100,
        fixed: true        
    },
    {
        title: 'Погрузка',
        dataIndex: 'from',
        key: 'from',
        width: 300, 
        render: (defaultValue: string, record: DataType) => (
            <SelectItem 
                defaultValue={defaultValue} 
                record={record.from}
                id={record.id}
            />
        )
    },
    {
        title: 'Разгрузка',
        dataIndex: 'to',
        key: 'to',
        width: 300, 
        render: (defaultValue: string, record: DataType) => (
            <SelectItem 
                defaultValue={defaultValue} 
                record={record.to}
                id={record.id} 
            />
        )
    },
]