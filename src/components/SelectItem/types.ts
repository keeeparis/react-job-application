import { DataType } from "../../types"

export type SelectItemProps = {
    defaultValue: string, 
    record: DataType['from'] | DataType['to'],
    id: DataType['id']
}