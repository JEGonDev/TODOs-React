import React from 'react'
import './styles/TodoSearch.css'

function TodoSearch({searchValue, setSearchValue}) {
    return(
        <input 
            placeholder='Comer jabon rey'
            value={searchValue}
            onChange={(event) => {
                setSearchValue(event.target.value)
            }} 
        ></input>
    )
}

export {TodoSearch}