import { useEffect, useReducer } from "react"
import { listReducer } from "../listReducer"

export const useList = () => {
    const initialState = []

    const init = () => {
        return JSON.parse(localStorage.getItem('series')) || []
    }

    const [series, dispatch] = useReducer(listReducer, initialState, init)

    const seriesCount = series.length
    const pendingSeriesCount = series.filter(serie => !serie.done).length

    useEffect(()=>{
        localStorage.setItem('series', JSON.stringify(series))
    },[series])

    const handleNewList = list => {
        const action = {
            type:"Add",
            payload: list
        }
        dispatch(action)
    }
    const handleDeleteList = id => {
        const action = {
            type:"Delete",
            payload: id
        }
        dispatch(action);
    }
    const handleCompleteList = id => {
        const action = {
            type:"Complete",
            payload:id
        }
        dispatch(action)
    }
    const handleUpdateList = (id, nombre, description,caps) => {
        const action = {
            type:"Update",
            payload:{
                id,
                nombre,
                description,
                caps
            }
        }
        dispatch(action)
    }
    return{
        series,
        seriesCount,
        pendingSeriesCount,
        handleNewList,
        handleDeleteList,
        handleCompleteList,
        handleUpdateList
    }
}