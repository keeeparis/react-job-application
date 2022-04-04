import { DataType } from "../../../types";

export interface routeState {
    routes: DataType[],
    currentRoute: DataType,
    isLoading: boolean,
    status: 'idle' | 'updated'
}
