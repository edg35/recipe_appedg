import React from 'react';
import '../App.css';
import Typography from '@mui/material/Typography'

const Home = () => {
  return (
    <div class="container">
      <Typography
        variant='h6'
        component='h6'
        sx={{padding: '2vh 0 0 2vw'}}
      >
        Search by category
      </Typography>
    </div>
  )
}

export default Home