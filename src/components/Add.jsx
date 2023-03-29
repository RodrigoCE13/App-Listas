import React from 'react'
import { useForm } from '../hooks/useForm'

export const Add = ({handleNewList}) => {

    const { caps, nombre, description,onInputChange, onResetForm } = useForm({
        nombre:'',
        description: '',
        caps: ''
    })

    const onFormSubmit = e => {
        e.preventDefault();

        if(description.length <= 1 && nombre.length <= 1)return

        let newSerie ={
            id: new Date().getTime(),
            nombre: nombre,
            description: description,
            caps: caps,
            done: false
        }
        handleNewList(newSerie);
        onResetForm();
    }

    return (
        <form onSubmit={onFormSubmit}>
        <input 
            type="text" 
            className='input-add' 
            name='nombre' 
            value={nombre} 
            onChange={onInputChange} 
            placeholder='Nombre'>
        </input>
        <input 
            className='desc' 
            type="text" 
            name='description'
            value={description} 
            onChange={onInputChange} 
            placeholder='Descripcion'/>
        <select className='select-tipo'>
            <option>Anime</option>
            <option>Manga</option>
            <option>Novela</option>
            <option>Serie</option>
        </select>
        <input 
            className='caps' 
            type="number" 
            name='caps'
            value={caps}
            onChange={onInputChange}
            placeholder='Caps'/>
        <button className='btn-add' type='submit'>Agregar</button>
        </form>
    )
}
