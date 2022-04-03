import { Select } from 'antd'
import { places } from '../mock'

const { Option } = Select

const SelectItem = () => {
    const handleChange = (value: any) => { 
        console.log(value) 
    }
    return (
        <Select 
            defaultValue='Point A' 
            size='middle' 
            style={{ width: '150px' }} 
            onChange={handleChange}
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