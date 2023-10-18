import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import { ImageUrl } from '../menuPage/imageURL';

export default function SignIn() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundImage: `url(${ImageUrl})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Grid container justifyContent="center">
        <Grid item xs={10} sm={6} md={4}>
          <Box
            sx={{
              borderRadius: 4,
              boxShadow: 20,
              position: 'relative',
              px: 3,
              py: 3,
              marginTop: 10,
              textAlign: 'center',
              backgroundColor: '#ffff',
            }}
          >
            <Typography
              component="h1"
              variant="h5"
              sx={{
                fontFamily: 'Verdana, Arial, Helvetica, sans-serif',
                mt: 5,
                mb: 3,
              }}
            >
              Sign in
            </Typography>
            <form action={'/menuPage'}>
              <TextField
                margin="normal"
                size="small"
                required
                fullWidth
                label="Name"
                name="Name"
                autoComplete="Name"
                autoFocus
              />

              <Button
                type="submit"
                variant="contained"
                sx={{
                  fontFamily: 'Verdana, Arial, Helvetica, sans-serif',
                  mt: 5,
                  mb: 15,
                }}
              >
                Sign In
              </Button>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
