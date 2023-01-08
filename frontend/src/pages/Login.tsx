import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography, { TypographyProps } from '@mui/material/Typography';
import Container from '@mui/material/Container';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import { useNavigation } from '../navigation';
import { AuthService } from '../services';

interface IFormData {
  email: string
  password: string
  rememberMe: boolean
}

const INITIAL_FORM_DATA: IFormData = {
  email: '',
  password: '',
  rememberMe: false
}

const Copyright = (props: TypographyProps) => (
  <Typography variant="body2" align="center" {...props}>
    {'Copyright © '}
    <Link color="inherit" href="https://www.sharenergy.com.br/">
      Sharenergy
    </Link>{' '}
    {new Date().getFullYear()}
    {'.'}
  </Typography>
)

const Login = () => {
  const navigation = useNavigation();
  const [formData, setFormData] = useState<IFormData>(INITIAL_FORM_DATA)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    AuthService.setToken('tokenFakeTMP');
    navigation('/home');
  };

  const handleFormDataChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleFormDataCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;

    setFormData({
      ...formData,
      [name]: checked
    })
  }

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            value={formData.email}
            onChange={handleFormDataChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Senha"
            type="password"
            autoComplete="current-password"
            value={formData.password}
            onChange={handleFormDataChange}
          />
          <FormControlLabel
            label="Remember me"
            control={
              <Checkbox
                name="rememberMe"
                color="primary"
                checked={formData.rememberMe}
                onChange={handleFormDataCheck}
              />
            }
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Esqueceu a senha?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                Ainda sem conta? Cadastre-se!
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 4, mb: 4 }} />
    </Container>
  );
};

export default Login;
