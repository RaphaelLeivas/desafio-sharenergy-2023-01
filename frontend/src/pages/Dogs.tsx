import React, { useState, useEffect, useContext, useCallback } from 'react';

import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import RefreshIcon from '@mui/icons-material/Refresh';

import { api } from '../services';
import { MainContext } from '../@types';

const Dogs = () => {
  const { setSnackbar } = useContext(MainContext);
  const [loading, setLoading] = useState(false);

  const [dogMediaUuid, setDogMediaUuid] = useState('');
  const [fileType, setFileType] = useState<'.jpg' | '.mp4'>('.jpg')

  const getDogs = useCallback(async () => {
    try {
      setLoading(true);
      const response = await api.get(
        `https://random.dog/`,
      );

      const htmlResponse = response.data;
      console.log(">>LOG  ~ file: Dogs.tsx:26 ~ htmlResponse", htmlResponse)
      if (!htmlResponse || typeof htmlResponse !== 'string') {
        throw new Error("Resposta da API mal formatada!")
      }

      const uuid = /((\w{4,12}-?)){5}/.exec(htmlResponse)?.[0];
      if (!uuid) {
        throw new Error("UUID da mídia não encontrado!")
      }

      if (htmlResponse.indexOf('.jpg') === -1) {
        setFileType('.mp4')
      } else {
        setFileType('.jpg')
      }
      setDogMediaUuid(uuid);
    } catch (error) {
      console.error(error);
      setSnackbar((prev) => ({
        ...prev,
        message: 'Falha ao buscar o dog!',
        type: 'error',
        open: true,
      }));
    } finally {
      setLoading(false);
    }
  }, [setSnackbar])

  useEffect(() => { getDogs() }, [getDogs])

  return (
    <>
      {loading || !dogMediaUuid ? (
        <CircularProgress />
      ) : (
        <Box component="div" sx={{ width: '100%', display: 'flex', flexDirection: "column", alignItems: 'center' }}>
          <Button
            variant="contained"
            sx={{ mb: 2, mt: 2 }}
            startIcon={<RefreshIcon />}
            onClick={getDogs}
          >
            Novo Dog
          </Button>
          {fileType === '.jpg' ? (
            <Box
              component="img"
              sx={{
                height: { xs: 250, md: 500 },
                width: { xs: 250, md: 500 },
                borderRadius: 16
              }}
              alt="Imagem de um cachorro aleatório"
              src={`https://random.dog/${dogMediaUuid}.jpg`}
            />
          ) : (
            <Box
              component="video"
              sx={{
                height: { xs: 250, md: 500 },
                width: { xs: 250, md: 500 },
                borderRadius: 16
              }}
              src={`https://random.dog/${dogMediaUuid}.mp4`}
              autoPlay
              loop
              muted
            />
          )}
        </Box>
      )}
    </>
  );
};

export default Dogs;
