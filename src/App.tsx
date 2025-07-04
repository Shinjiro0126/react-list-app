import React, {useState} from 'react';
import AddWishForm from './components/AddWishForm';
import WishList from './components/WishList';
import Snowflakes from './components/Snowflakes';
import {Container,Button, Box} from '@mui/material';
import './App.css';

export default function App() {
 const [wishes, setWishes] = useState<string[]>([]);
 const [showForm, setShowForm] = useState<boolean>(false);

 const handleAddWish = (wish: string) => {
  setWishes([...wishes, wish]);
  setShowForm(false);
 }

 const handleRemoveWish = (wish: string) => {
  setWishes(wishes.filter(w => w !== wish));
 }

 return(
  <Container maxWidth={false} className="app-container" disableGutters>
    <Snowflakes />
    <Box sx={{ my: 4, textAlign: 'center', px: 2}}>
      <Button
        sx={{ mb: 1 }}
        variant='contained'
        color='primary'
        onClick={() => setShowForm(!showForm)}
      >
        {showForm ? 'Close' : 'Add Wish'}
      </Button>
      {showForm && 
        <AddWishForm onAddWish={handleAddWish} />
      }
      <WishList wishes={wishes} onRemoveWish={handleRemoveWish} />
    </Box>
  </Container>
 )
}