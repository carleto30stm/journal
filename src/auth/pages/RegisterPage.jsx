import {Link as RouterLink} from 'react-router-dom'
import { Button, Divider, FormControl, FormLabel, Grid2, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"



export const RegisterPage = () => {
  return (
    <AuthLayout title="Register">
      <FormControl>
        <FormLabel htmlFor="name"> Nombre </FormLabel>
        <TextField
          name="name"
          type="text"
          placeholder="Nombre"
          id="name"
          autoFocus
          fullWidth
          variant="outlined"
          autoComplete='name'
        /></FormControl>
        <FormControl>
        <FormLabel htmlFor="email"> Email </FormLabel>
        <TextField
          name="email"
          type="email"
          placeholder="Email"
          id="email"
          autoFocus
          fullWidth
          variant="outlined"
          autoComplete='email'
        />
        <FormLabel htmlFor="password"> Contraseña </FormLabel>
        <TextField
          name="password"
          type="password"
          placeholder="Password"
          id="password"
          autoFocus
          fullWidth
          variant="outlined"
          autoComplete='current-password'
        />
      </FormControl>
      <div id="logger">
      <Divider >
      <Button variant="contained">
        Crear cuenta
      </Button>
      </Divider>
      </div>
      <Grid2 container direction='row' justifyContent='end' >
      <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
            <Link component={RouterLink} to="/auth/login">
              Ingresar
            </Link>
          </Grid2>
    </AuthLayout>
  )
}
