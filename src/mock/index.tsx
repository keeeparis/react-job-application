import SelectItem from "../components/SelectItem"

export const places = [
    {value: 'point-A', name: 'Point A'},
    {value: 'point-B', name: 'Point B'},
    {value: 'point-C', name: 'Point C'},
]

export const dataSource = [
    {
        key: '1',
        id: '1',
        from: <SelectItem />,
        to: <SelectItem />,
    },
    {
        key: '2',
        id: '2',
        from: <SelectItem />,
        to: <SelectItem />,
    },
    {
        key: '3',
        id: '3',
        from: <SelectItem />,
        to: <SelectItem />,
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
    },
    {
        title: 'Разгрузка',
        dataIndex: 'to',
        key: 'to',
    },
]