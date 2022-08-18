import React from 'react'

const convertDate = (date) => {
    var stringDate = new Date(date)
    return stringDate.toDateString()
  
}

export default convertDate