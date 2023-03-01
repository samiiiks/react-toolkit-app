import React from 'react'
import { useState } from 'react'

function Searchbar(props) {
    const { user, setFilterData } = props
    const [query, setQuery] = useState('')

    const handleSearch = (e) => {
        const getSearch = e.target.value
        setQuery(getSearch)
        console.log(user)
        const data = user?.filter(item => item.first_name.toLowerCase().includes(getSearch.toLowerCase()) || item.last_name.toLowerCase().includes(getSearch.toLowerCase()) )
        
        if (getSearch) {
            setFilterData(data)
        }
        else {
            setFilterData(user)
        }
    }
    return (
        <div>
            <form>
                <input type="text" placeholder='Serach..' value={query} onChange={(e) => handleSearch(e)} />
            </form>
        </div>
    )
}

export default Searchbar
