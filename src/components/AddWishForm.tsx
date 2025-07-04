import React, {useState} from 'react';
import {TextField, Button, Box} from '@mui/material';

export default function AddWishForm({onAddWish}: {onAddWish: (wish: string) => void}) {
  const [wish, setWish] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (wish.trim()) {
      onAddWish(wish);
      setWish('');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{display: 'flex', alignItems: "center", justifyContent: "center"}}>
      <TextField
        sx={{backgroundColor: 'white', borderRadius: 1}}
        label="Add your wish"
        variant="outlined"
        value={wish}
        onChange={(e) => setWish(e.target.value)}
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Add Wish
      </Button>
    </Box>
  );

}