import React, { useState, useEffect, useContext } from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import { api } from '../services';
import { MainContext } from '../@types';

const Cats = () => {
  const { setSnackbar } = useContext(MainContext);
  const [loading, setLoading] = useState(false);

  const getCatByHttp = async (code: number) => {
    try {
      const response = await api.get(
        `https://random.dog/`,
        // { headers: { 
        //   'Content-Type': 'application/json',
        //   'Access-Control-Allow-Origin': '*',
        // } }
      );
      console.log(">>LOG  ~ file: Cats.tsx:28 ~ response", response.data)
    } catch (error) {
      console.error(error);
      setSnackbar((prev) => ({
        ...prev,
        message: 'Falha ao buscar gatos!',
        type: 'error',
        open: true,
      }));
    } finally {
      setLoading(false);
    }

  }

  useEffect(() => { getCatByHttp(200) }, [])

  return (
    <>
      {loading ? (
        <CircularProgress />
      ) : (
        <Card sx={{ maxWidth: 345 }}>
          {/* <CardMedia
            sx={{ height: 140 }}
            image="https://www.pakainfo.com/wp-content/uploads/2021/09/sample-image-url-for-testing-300x169.jpg"
            title="green iguana"
          /> */}
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      )}
    </>
  );
};

export default Cats;
