import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';

import { MaskedInput } from './index'

interface EditDialogProps {
  type: 'edit' | 'add'
  open: boolean
  onClose: () => void
  onSave: (data: IFormData) => void
}

interface IFormData {
  name: string;
  email: string;
  cpf: string;
  address: string;
  phone: string;
}

const INITIAL_FORM_DATA: IFormData = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  phone: '',
};

const EditDialog = ({
  type,
  open,
  onClose,
  onSave,
}: EditDialogProps) => {
  const [formData, setFormData] = useState<IFormData>(INITIAL_FORM_DATA);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSave(formData);
  };

  const handleFormDataChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };


  return (
    <Dialog
      onClose={onClose}
      open={open}
      maxWidth="md"
      PaperProps={{ sx: { bgcolor: "#222222", p: 4 } }}
    >
      <Typography variant="h5" sx={{ mb: 2 }}>
        {type === 'edit' ? 'Editar ' : 'Cadastrar '} Cliente
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
      >
        <Grid container spacing={2} >
          <Grid item xs={12} md={6} >
            <TextField
              variant="standard"
              margin="normal"
              required
              fullWidth
              label="Nome"
              name="name"
              autoFocus
              value={formData.name}
              onChange={handleFormDataChange}
            />
            <TextField
              variant="standard"
              margin="normal"
              required
              fullWidth
              name="email"
              label="Email"
              value={formData.email}
              onChange={handleFormDataChange}
            />
            <TextField
              variant="standard"
              margin="normal"
              required
              fullWidth
              name="cpf"
              label="CPF"
              value={formData.cpf}
              onChange={handleFormDataChange}
            />

          </Grid>
          <Grid item xs={12} md={6} >
            <TextField
              variant="standard"
              margin="normal"
              required
              fullWidth
              label="Endereço"
              name="address"
              value={formData.address}
              onChange={handleFormDataChange}
            />
            <MaskedInput
              name="phone"
              label="Telefone"
              value={formData.phone}
              onChange={handleFormDataChange}
              mask="(00) 0 0000-0000"
              sx={{ width: '100%', mt: 2, mb: 2 }}
            />
          </Grid>
        </Grid>

        <Box
          component="div"
          width="100%"
          display="flex"
          justifyContent="flex-end"
        >
          <Button color="error" variant="outlined" onClick={onClose}>
            Cancelar
          </Button>
          <Button type="submit" variant="contained" sx={{ ml: 2 }} >
            Salvar
          </Button>
        </Box>


      </Box>
    </Dialog>
  );
};

export default EditDialog;
