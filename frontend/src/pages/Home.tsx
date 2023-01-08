import React, { useState, useEffect, useContext } from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import { api } from '../services';
import { IPerson, MainContext } from '../@types';

const Home = () => {
  const { setSnackbar } = useContext(MainContext);

  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<IPerson[]>([]);

  useEffect(() => {
    const getRandomPeople = async () => {
      try {
        setLoading(true);
        const response = await api.get(
          'https://randomuser.me/api/1.4/?results=2&password=upper,lower,number,10-16&format=json&nat=br'
        );

        if (!response || !response.data || !Array.isArray(response.data.results)) {
          throw new Error('Reposta da API mal formatada!');
        }

        setUsers(
          response.data.results.map((result: any) => ({
            id: result.id.value,
            name: result.name.first + ' ' + result.name.last,
            email: result.email,
            username: result.login.username,
            age: result.dob.age,
            photo: result.picture.medium,
          }))
        );

        setSnackbar((prev) => ({
          ...prev,
          message: 'Usuários buscados com sucesso',
          type: 'success',
          open: true,
        }));
      } catch (error) {
        console.error(error);
        setSnackbar((prev) => ({
          ...prev,
          message: 'Falha ao buscar usuários!',
          type: 'error',
          open: true,
        }));
      } finally {
        setLoading(false);
      }
    };

    getRandomPeople();
  }, [setSnackbar]);

  return (
    <Box component="div">
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          {users.map((user) => (
            <Card
              elevation={8}
              sx={{ width: '100%', maxWidth: 600, bgcolor: '#111111', mb: 4 }}
              key={user.id}
            >
              <CardContent
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Avatar src={user.photo} sx={{ mr: 4, width: 64, height: 64 }} />
                <Box sx={{ flexGrow: 1, borderLeft: 1, pl: 4, borderColor: 'primary.main' }}>
                  <Typography sx={{ mb: 2 }} variant="h6">
                    {user.name}, {user.age} anos
                  </Typography>
                  <Typography variant="body2">
                    <u>Email</u>: {user.email}
                  </Typography>
                  <Typography variant="body2">
                    <u>Nome de usuário</u>: {user.username}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          ))}
        </>
      )}
    </Box>
  );
};

export default Home;
