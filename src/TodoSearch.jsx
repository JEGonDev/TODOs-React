import React from 'react'
import './styles/TodoSearch.css'

function TodoSearch(props) {
    return(
        <input 
            placeholder='Comer jabon rey'
            value={props.searchValue}
            onChange={(event) => {
                props.setSearchValue(event.target.value)
            }} 
        ></input>
    )
}

export {TodoSearch}