import React from 'react';
import {
  Box,
  Grid2,
  TextField,
  Button,
  Typography,
  Checkbox,
  Link,
} from '@mui/material';
import {Google, FacebookRounded , Instagram } from '@mui/icons-material';

function LoginPage() {
  return (
    <Grid2 container style={{ height: '100vh' , 
    justifyContent: 'center',
    alignItems: 'center' }}>
      {/* Left Section */}
      <Grid2
        item
        xs={12}
        sm={6}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: '#f4f5fa',
        }}
      >
        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{ width: '80%', maxWidth: '400px'
           
      
           }}
        >
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Crema
          </Typography>
          <TextField
            fullWidth
            label="Email"
            type="email"
            variant="outlined"
            margin="normal"
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
          />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mt: 2,
            }}
          >
            <Checkbox /> <Typography>Remember Me</Typography>
            <Link href="#" underline="none">
              Forget Your Password?
            </Link>
          </Box>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            Login
          </Button>
          <Typography sx={{ mt: 2, textAlign: 'center' }}>
            Don't have an account?{' '}
            <Link href="#" underline="none">
              Signup
            </Link>
          </Typography>
          <Typography
            sx={{ textAlign: 'center', mt: 2, color: 'gray' }}
            variant="body2"
          >
            Or Login With
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 1 }}>
            <Button variant="outlined" color="inherit">
              <Google/>
            </Button>
            <Button variant="outlined" color="inherit">
              <FacebookRounded/>
            </Button>
            <Button variant="outlined" color="inherit">
              <Instagram/>
            </Button>
          </Box>
        </Box>
      </Grid2>

      {/* Right Section */}
      <Grid2
        item
        xs={12}
        sm={6}
        style={{
          background: '#1a1a1a',
          color: '#fff',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box textAlign="center"
         style={{
            background: '#1a1a1a',
            padding: '20vh'
           
          }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Welcome to Crema!
          </Typography>
          <Typography>
            Crema is purely based on Material UI components and follows Material
            UI guidelines.
          </Typography>
        </Box>
      </Grid2>
    </Grid2>
  );
}

export default LoginPage;
