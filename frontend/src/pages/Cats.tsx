import React, { useState, useEffect, useContext, useCallback } from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

import SearchIcon from '@mui/icons-material/Search';



import { api } from '../services';
import { MainContext } from '../@types';
import { HTTP_STATUS_LIST } from '../constants';

const Cats = () => {
  const { setSnackbar } = useContext(MainContext);
  const [loading, setLoading] = useState(false);
  const [code, setCode] = useState(100);

  return (
    <>
      <Box component="div" sx={{ mb: 4, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <Autocomplete
          selectOnFocus
          disablePortal
          options={HTTP_STATUS_LIST.map((status) => status.code)}
          sx={{ width: 300, mr: 4 }}
          renderInput={(params) => <TextField {...params} label="Status HTTP" />}
          noOptionsText="Sem opções"
          openOnFocus
          PaperComponent={({ children }) => (
            <Paper style={{ background: "#333333" }}>
              <Typography component={'span'}>
                {children}
              </Typography>
            </Paper>
          )}
          value={code.toString()}
          // onInputChange={(e) => console.log(e.target)}
        />
        <Button
          variant="contained"
          color="success"
          startIcon={<SearchIcon />}
        >
          Buscar
        </Button>
      </Box>

      {loading ? (
        <CircularProgress />
      ) : (
        <Card
          sx={{
            maxWidth: { xs: 250, md: 600 },
            borderRadius: 16,
            p: 4,
            bgcolor: '#000000',
          }}
          elevation={16}
        >
          <Box
            component="img"
            sx={{
              maxWidth: { xs: 250, md: 600 },
            }}
            alt="Imagem de um gato conforme o status HTTP selecionado."
            src={`https://http.cat/102`}
          />
          <CardActions sx={{ justifyContent: 'flex-end', p: 0 }} >
            <Button>
              <Link
                href={`https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/${code}`}
                variant="body1"
                target="_blank"
                rel="noreferrer"
                underline="none"
              >
                Saiba Mais
              </Link>
            </Button>
          </CardActions>
        </Card>
      )}
    </>
  );
};

export default Cats;
