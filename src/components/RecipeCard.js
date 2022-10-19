import React from 'react'
import { Card, CardHeader, CardMedia, Avatar, CardContent, Typography } from '@mui/material'

const RecipeCard = () => {
  return (
    <Card>
        <CardHeader 
            avatar={
                <Avatar aria-label="recipe">
                    R
                </Avatar>
            }
            title="Shrimp and Chorizo Paella"
            subheader="30min | Easy"
        />
        <CardMedia
            component="img"
            height="194"
              src="https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="food"
        />
        <CardContent className='recipe-card-content'>
            <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to cook
                together with your guests. Add 1 cup of frozen peas along with the mussels,
                if you like.
            </Typography>
        </CardContent>
    </Card>
  )
}

export default RecipeCard