import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Link from 'next/link';

export default function CardComponent(props) {
  const { product } = props;

  return (
    <Link href={`/products/${product.id}`} passHref>
      <span>
        <Card sx={{}}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image={product.img}
              alt={product.alt}
              sx={{ mx: 'auto', mt: 2, mb: 1, display: 'block', maxWith: '100'}}
            />
            <CardContent>
              <Typography gutterBottom variant="h6">
                {product.title}
              </Typography>
              <Typography variant="h6">
                {product.subTitle}
              </Typography>
              <Typography variant="h6">
                {product.price}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </span>
    </Link>
  );
}
