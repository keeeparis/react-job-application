import { DataType } from "../App"
import SelectItem from "../components/SelectItem"

export const places = [
    // with array of number it breaks!
    // TODO: on change -> manage value properly
    { value: [51.505, -0.09], name: 'Point A' },
    { value: [51.555, -0.03], name: 'Point B' },
    { value: [51.525, -0.05], name: 'Point C' },
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
        from: 'Point C',
        to: 'Point C',
    },
]

export const columns = [
    {
        title: 'Номер заявки',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Погрузка',
        dataIndex: 'from',
        key: 'from',
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
        render: (defaultValue: string, record: DataType) => (
            <SelectItem 
                defaultValue={defaultValue} 
                record={record.to}
                id={record.id} 
            />
        )
    },
]