import React, { useState, useContext } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import GroupsIcon from '@mui/icons-material/Groups';

import { MainContext } from '../@types';
import { CustomDataTable, EditDialog } from '../components';

const FAKE_TABLE_DATA = [
  {
    id: '1',
    name: 'Nome 1',
    email: 'Email 1',
    phone: 'Phone 1',
    address: 'Address 1',
    cpf: 'CPF 1',
  },
  {
    id: '2',
    name: 'Nome 2',
    email: 'Email 2',
    phone: 'Phone 2',
    address: 'Address 2',
    cpf: 'CPF 2',
  },
  {
    id: '3',
    name: 'Nome 3',
    email: 'Email 3',
    phone: 'Phone 3',
    address: 'Address 3',
    cpf: 'CPF 3',
  },
  {
    id: '4',
    name: 'Nome 4',
    email: 'Email 4',
    phone: 'Phone 4',
    address: 'Address 4',
    cpf: 'CPF 4',
  },
  {
    id: '5',
    name: 'Nome 5',
    email: 'Email 5',
    phone: 'Phone 5',
    address: 'Address 5',
    cpf: 'CPF 5',
  },
];

const Clients = () => {
  const { setSnackbar } = useContext(MainContext);
  const [openDialog, setOpenDialog] = useState(true);

  const tableColumnsList = [
    { name: 'name', label: 'Nome' },
    { name: 'email', label: 'Email' },
    { name: 'phone', label: 'Telefone' },
    { name: 'address', label: 'Endereço' },
    { name: 'cpf', label: 'CPF' },
  ];

  return (
    <>
      <CustomDataTable
        title="Clientes"
        data={FAKE_TABLE_DATA}
        columns={tableColumnsList}
        addCallback={() => setOpenDialog(true)}
      />
      <EditDialog
        type="add"
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        onSave={(data) => console.log(data)}
      />
    </>
  );
};

export default Clients;
