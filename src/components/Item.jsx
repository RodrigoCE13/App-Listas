import React from 'react'
import { TfiTrash, TfiEye } from "react-icons/tfi";
import { Update } from './Update';

export const Item = ({
    serie,
    handleDeleteList,
    handleCompleteList,
    handleUpdateList
}) => {
    return (
        <li>
            <span onClick={()=>handleCompleteList(serie.id)}>
                <label htmlFor='' className={`container-done ${serie.done ? 'active' : ''}`}><TfiEye/></label>
            </span>
            <Update serie={serie} handleUpdateList={handleUpdateList}/>
            <button className='btn-delete' onClick={()=>handleDeleteList(serie.id)}><TfiTrash/></button>
        </li>
    )
}
