import { Card, CardContent, IconButton, Typography } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import './Postcard.css';


export default function Postcard({wish, onRemoveWish}: {wish: string, onRemoveWish: (wish: string) => void}) {
  return (
    <Card className="postcard">
      <CardContent>
        <IconButton
          className="delete-button"
          onClick={() => onRemoveWish(wish)}
          size="small"
        >
          <CloseIcon fontSize="inherit" />
        </IconButton>
        <Typography variant="h6" component="div" className="postcard-title">
          {wish}
        </Typography>
      </CardContent>
    </Card>
  );
}