import React from 'react'
import { Avatar, Typography } from '@mui/material'
import "../App.css"

const SearchCategoriesCard = (props) => {
  return (
    <div className='home-categories'>
        <Avatar 
            alt={props.props.alt} 
            src={props.props.src} 
            sx={{
                height: 50,
                width: 50
            }}
        />
        <Typography>{props.props.text}</Typography>
    </div>
  )
}

export default SearchCategoriesCard