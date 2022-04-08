import React from 'react'
import { Select } from 'antd'

import { updateRoute } from '../../redux/features/route/routeSlice'
import { useAppDispatch } from '../../redux/hooks'
import { SelectItemProps } from './types'
import { places } from '../../mock'

const { Option } = Select

const SelectItem = ({ defaultValue, record, id } : SelectItemProps) => {
    const dispatch = useAppDispatch()
    
    const handleChange = (value: string) => {
        dispatch(updateRoute({
            value,
            record,
            id
        }))
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

export default React.memo(SelectItem)