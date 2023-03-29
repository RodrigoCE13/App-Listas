import React from 'react'
import { Item } from './Item'

export const List = ({
    series,
    handleDeleteList,
    handleCompleteList,
    handleUpdateList
}) => {
    return (
        <ul>
            {series.map(serie => (
                <Item
                    key={serie.id}
                    serie={serie}
                    handleUpdateList={handleUpdateList}
                    handleDeleteList={handleDeleteList}
                    handleCompleteList={handleCompleteList}
                />
            ))}
        </ul>
    )
}
