import { DataType } from "../../../types";

export interface routeState {
    routes: DataType[],
    currentRoute: {
        key: string | null
    },
    isLoading: boolean,
    status: 'idle' | 'updated'
}
