import React, { useState } from 'react';

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
  const [dialog, setDialog] = useState({ open: false, type: 'add' as 'add' | 'edit' });

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
        addCallback={() => setDialog({ type: 'add', open: true })}
        editCallback={() => setDialog({ type: 'edit', open: true })}
      />
      <EditDialog
        type={dialog.type}
        open={dialog.open}
        onClose={() => setDialog((prev) => ({ ...prev, open: false }))}
        onSave={(data) => console.log(data)}
      />
    </>
  );
};

export default Clients;
