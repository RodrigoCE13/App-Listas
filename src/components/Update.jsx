import React, { useRef, useState } from 'react'
import { VscEdit } from "react-icons/vsc";
import { useForm } from '../hooks/useForm';

export const Update = ({
    serie,
    handleUpdateList
}) => {

    const {updateCaps, updateNombre, updateDescription, onInputChange} = useForm({
        updateNombre: serie.nombre,
        updateDescription: serie.description,
        updateCaps: serie.caps
    })

    const [disable, setDisable] = useState(true)
    const focusInputRef = useRef()

    const onSubmitUpdate = e => {
        e.preventDefault()

        const id = serie.id
        const nombre = updateNombre
        const description = updateDescription
        const caps = updateCaps


        handleUpdateList(id,nombre,description, caps)

        setDisable(!disable)

        focusInputRef.current.focus()
    }

    return (
        <form onSubmit={onSubmitUpdate}>
        <input 
            type="text" 
            className={`input-update ${
            serie.done ? 'text-decoration-dashed' : ''
            }`} 
            name='updateNombre' 
            value={updateNombre} 
            onChange={onInputChange} 
            placeholder='Nombre de obra' 
            readOnly={disable} 
            ref={focusInputRef}>
        </input>
        <input 
            type="text" 
            className={`input-update ${
            serie.done ? 'text-decoration-dashed' : ''
            }`} 
            name='updateDescription' 
            value={updateDescription} 
            onChange={onInputChange} 
            placeholder='Nombre de obra' 
            readOnly={disable} 
            ref={focusInputRef}>
        </input>
        <input 
            type="number" 
            className={`input-update ${
            serie.done ? 'text-decoration-dashed' : ''
            }`} 
            name='updateCaps' 
            value={updateCaps} 
            onChange={onInputChange} 
            placeholder='Nombre de obra' 
            readOnly={disable} 
            ref={focusInputRef}>
        </input>
        <button className='btn-edit' type='submit'><VscEdit/></button>
        </form>
    )
}
