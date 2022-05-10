import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export const ProductCard = ({el,handelprix}) => {
  return (
    <div> <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image={el.img}
        alt="paris"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         { el.name}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
         { el.prix}
        </Typography>
      </CardContent>
      <button onClick={()=>handelprix(el.prix)}>mm </button>
    </CardActionArea>
    
  </Card></div>
  )
}
