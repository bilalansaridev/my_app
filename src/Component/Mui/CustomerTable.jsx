import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  Typography,
  IconButton,
  Button,
  TextField,
  Box,
  Grid2
} from '@mui/material';
import { Visibility, Edit, Delete } from '@mui/icons-material';

const data = [
  {
    id: 102,
    name: 'Ada Evans',
    email: 'jablawpuh@gmail.com',
    contact: '+1 (232) 479-2902',
    age: 32,
    country: 'St. Pierre & Miquelon',
    status: 'Rejected',
  },
  {
    id: 34,
    name: 'Adele McDaniel',
    email: 'li@gmail.com',
    contact: '+1 (227) 665-3977',
    age: 22,
    country: 'Argentina',
    status: 'Verified',
  },
  // Add more rows as needed
];

const statusStyles = {
  Verified: { color: 'green', background: '#e6ffe6', padding: '2px 8px', borderRadius: '8px' },
  Rejected: { color: 'red', background: '#ffe6e6', padding: '2px 8px', borderRadius: '8px' },
  Pending: { color: 'orange', background: '#fff5e6', padding: '2px 8px', borderRadius: '8px' },
};

function CustomerTable() {
  return (
    <Grid2 
    container
    spacing={1}
    direction="row"
    justify="flex-start"
    alignItems="flex-start"
    alignContent="stretch"
    wrap="nowrap"
     style={{ height: '100vh' , 
    justifyContent: 'center',
    alignItems: 'center' }}>

    <Box sx={{ padding: '16px' }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <TextField
          placeholder="Search 200 records..."
          variant="outlined"
          size="small"
          sx={{ width: '300px' }}
        />
        <Box>
          <Button variant="outlined" sx={{ marginRight: '8px' }}>
            Sort by (User Name)
          </Button>
          <Button variant="contained" color="primary">
            + Add Customer
          </Button>
        </Box>
      </Box>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox />
              </TableCell>
              <TableCell>#</TableCell>
              <TableCell>User Name</TableCell>
              <TableCell>Contact</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Country</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell padding="checkbox">
                  <Checkbox />
                </TableCell>
                <TableCell>{row.id}</TableCell>
                <TableCell>
                  <Box display="flex" alignItems="center">
                    <Box
                      sx={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        backgroundColor: '#f0f0f0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: '8px',
                      }}
                    >
                      {/* Replace with avatar images if needed */}
                      <Typography>{row.name[0]}</Typography>
                    </Box>
                    <Box>
                      <Typography>{row.name}</Typography>
                      <Typography variant="body2" color="textSecondary">
                        {row.email}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>{row.contact}</TableCell>
                <TableCell>{row.age}</TableCell>
                <TableCell>{row.country}</TableCell>
                <TableCell>
                  <Typography sx={statusStyles[row.status]}>{row.status}</Typography>
                </TableCell>
                <TableCell>
                  <IconButton>
                    <Visibility />
                  </IconButton>
                  <IconButton>
                    <Edit />
                  </IconButton>
                  <IconButton>
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
    </Grid2>
  );
}

export default CustomerTable;
