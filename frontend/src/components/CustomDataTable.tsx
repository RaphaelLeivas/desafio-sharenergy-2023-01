import React from 'react';
import MUIDataTable, {
  MUIDataTableOptions,
  MUIDataTableColumn,
  MUIDataTableMeta,
} from 'mui-datatables';

import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import GroupIcon from '@mui/icons-material/Group';

import { MUI_DATATABLE_LABELS } from '../constants';

interface DataTableProps {
  columns: { name: string; label: string }[];
  editCallback?: (tableData: MUIDataTableMeta) => void;
  deleteCallback?: (tableData: MUIDataTableMeta) => void;
  addCallback?: () => void;
  title: string;
  data: Array<any>;
}

const CustomDataTable = ({
  columns,
  editCallback = () => undefined,
  deleteCallback = () => undefined,
  addCallback = () => undefined,
  title,
  data,
}: DataTableProps) => {
  const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

  const tableOptions: MUIDataTableOptions = {
    textLabels: MUI_DATATABLE_LABELS,
    selectableRows: 'none',
    filter: false,
    responsive: 'standard',
    downloadOptions: {
      filename: `${title}.csv`,
      separator: ',',
      filterOptions: {
        useDisplayedColumnsOnly: true,
        useDisplayedRowsOnly: false,
      },
    },
    customToolbar: () => (
      <Tooltip title={title}>
        <IconButton
          sx={{
            backgroundColor: 'success.dark',
            ml: 3,
            transition: 'background 0.3s',
            '&:hover': {
              backgroundColor: 'success.main',
            },
            p: 1.5
          }}
          onClick={addCallback}
        >
          <AddIcon color="success" />
        </IconButton>
      </Tooltip>
    ),
  };

  let tableColumns: MUIDataTableColumn[] = [];

  tableColumns.push(
    {
      name: 'id',
      label: 'id',
      options: {
        filter: true,
        sort: true,
        sortThirdClickReset: true,
        display: isDevelopment ? false : 'excluded',
      },
    }
  );

  for (const column of columns) {
    tableColumns.push({
      name: column.name,
      label: column.label,
      options: {
        filter: true,
        sort: true,
        sortThirdClickReset: true,
      },
    });
  }

  tableColumns.push(
    {
      name: 'actions',
      label: 'Ações',
      options: {
        filter: false,
        sort: false,
        download: false,
        print: false,
        customBodyRender: (value, tableMeta) => (
          <Box display="flex" flexDirection="row" textAlign="center">
            <IconButton aria-label="Editar" onClick={() => editCallback(tableMeta)}>
              <EditIcon />
            </IconButton>

            <IconButton aria-label="Remover" onClick={() => deleteCallback(tableMeta)}>
              <DeleteIcon />
            </IconButton>
          </Box>
        ),
      },
    }
  );

  const TableTitle = () => (
    <Box display="flex" flexDirection="row" alignItems="center" >
      <Typography variant="h5">{title}</Typography>
      <GroupIcon sx={{ ml: 2 }} />
    </Box>
  )

  return (
    <MUIDataTable
      title={<TableTitle />}
      data={data}
      columns={tableColumns}
      options={tableOptions}
    />
  );
};

export default CustomDataTable;
