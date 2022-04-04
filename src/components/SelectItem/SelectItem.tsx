import { Select } from 'antd'

import { setCurrentRoute, updateRoute } from '../../redux/features/route/routeSlice'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { SelectItemProps } from './types'
import { places } from '../../mock'

const { Option } = Select

const SelectItem = ({ defaultValue, record, id } : SelectItemProps) => {
    const dispatch = useAppDispatch()
    const currentRouteId = useAppSelector(state => state.routes.currentRoute.id)
    
    const handleChange = (value: string) => {
        dispatch(updateRoute({
            value,
            record,
            id
        }))

        currentRouteId === id && dispatch(setCurrentRoute(id.toString()))
    }

    return (
        <Select 
            defaultValue={defaultValue} 
            onChange={handleChange}
            size='middle'
            className='selectItem'
        >
            {places.map(({name}) =>
                <Option 
                    value={name} 
                    key={name}
                >
                    {name}
                </Option>
            )}
        </Select>
    )
}

export default SelectItem