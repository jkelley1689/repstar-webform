import React, { useState } from 'react'

import './SearchBar.css'
import PersonSearchIcon from '@mui/icons-material/PersonSearch';

const SearchBar = ({placeholder, data}) => {

    const [filteredData, setFilteredData] = useState([])

    const users = data.listUsers.items

    const handleFilter = (event) => {
        const search =  event.target.value
        const newFilter = users.filter((value) => { 
            const fullName = value.firstName + " " + value.lastName
            return (value.firstName.toLowerCase().includes(search.toLowerCase()) || 
                    value.lastName.toLowerCase().includes(search.toLowerCase()) ||
                    fullName.toLowerCase().includes(search.toLowerCase())
                    )
        })
        if(search === "")
            setFilteredData([])
        else
            setFilteredData(newFilter)
    }

  return (
    <div className='search'>
        <div className='searchInput'>
            <input type="text" placeholder={placeholder} onChange={handleFilter} />
            <div className='searchIcon'>
                <PersonSearchIcon />
            </div>
        </div>
        {filteredData.length !== 0 && (
        <div className='dataResult'>
            {filteredData.map((user,key) => {
                return(
                    <a className='dataItem' href={`https://repstarapp.net/repInfo/${user.id}`} target="_blank" rel='noreferrer'>
                        <p>{user.firstName} {user.lastName} {user.Profile.companyName}</p>
                    </a>
                )
            })}
        </div>
        )}
    </div>
  )
}

export default SearchBar