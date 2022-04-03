import { Select } from 'antd'
import { DataType } from '../App'
import { places } from '../mock'
import { setCurrentRoute, updateRoute } from '../redux/features/route/routeSlice'
import { useAppDispatch, useAppSelector } from '../redux/hooks'

const { Option } = Select

type SelectItemProps = {
    defaultValue: string, 
    record: DataType['from'] | DataType['to'],
    id: DataType['id']
}

const SelectItem = ({ defaultValue, record, id } : SelectItemProps) => {
    const dispatch = useAppDispatch()
    const currentRouteId = useAppSelector(state => state.routes.currentRoute.id)
    
    const handleChange = (value: any) => {
        dispatch(updateRoute({
            value: value.label,
            record,
            id
        }))
        if (currentRouteId === id) {
            dispatch(setCurrentRoute(id.toString()))
        }
    }

    return (
        <Select 
            defaultValue={defaultValue} 
            onChange={handleChange}
            labelInValue={true}
            size='middle' 
            style={{ 
                width: '150px' 
            }} 
        >
            {places.map(place =>
                <Option 
                    value={place.value} 
                    key={place.value}
                >
                    {place.name}
                </Option>
            )}
        </Select>
    )
}

export default SelectItem