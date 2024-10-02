import React from 'react'
import './styles/TodoSearch.css'

function TodoSearch() {
    const [searchValue, setSearchValue] = React.useState('')

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