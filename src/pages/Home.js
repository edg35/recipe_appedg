import React from 'react';
import '../App.css';
import SearchCategoriesCard from '../components/SearchCategoriesCard';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import RecipeCard from '../components/RecipeCard';

const options = [
  {
    src: "https://cdn-icons-png.flaticon.com/128/8346/8346899.png",
    alt: "hamburger",
    text: "Sandwiches"
  },
  {
    src: "https://cdn-icons-png.flaticon.com/128/2515/2515263.png",
    alt: "salad",
    text: "Salad"
  },
  {
    src: "https://cdn-icons-png.flaticon.com/128/1404/1404945.png",
    alt: "pizza",
    text: "Italian"
  },
  {
    src: "https://cdn-icons-png.flaticon.com/128/2718/2718224.png",
    alt: "Ramen",
    text: "Japanese"
  },
  {
    src: "https://cdn-icons-png.flaticon.com/128/737/737967.png",
    alt: "fastfood",
    text: "American"
  },
  {
    src: "https://cdn-icons-png.flaticon.com/128/8346/8346807.png",
    alt: "cake",
    text: "Dessert"
  },
  {
    src: "https://cdn-icons-png.flaticon.com/128/2515/2515225.png",
    alt: "taco",
    text: "Mexican"
  }
]

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>2.3 million recipes <br /> At your fingertips</h1>
        <img alt="Hero" src="https://images.pexels.com/photos/326279/pexels-photo-326279.jpeg?cs=srgb&dl=pexels-pixabay-326279.jpg&fm=jpg"></img>
      </div>
      <div className="search-categories">
        {
          options.map((opt, key) => 
            <SearchCategoriesCard key={key} props={opt} />
          )
        }
      </div>
      <div className='popular-section'>
        <Grid2 container spacing={2} sx={{display: 'flex', justifyContent: 'space-evenly'}}>
          <Grid2 item xs={12} md={6} lg={3}>
            <RecipeCard />
          </Grid2>
          <Grid2 item xs={12} md={6} lg={3}>
            <RecipeCard />
          </Grid2>
          <Grid2 item xs={12} md={6} lg={3}>
            <RecipeCard />
          </Grid2>
        </Grid2>
      </div>
    </div>
  )
}

export default Home