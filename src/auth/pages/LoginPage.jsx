import {Link as RouterLink} from 'react-router-dom'
import {Button, FormControl, FormLabel, Link, TextField } from "@mui/material"
import { AuthLayout } from "../layout"
import { ForgotPassword } from "../helper/ForgotPassword"
import { useState } from "react"
import { FacebookIcon, GoogleIcon } from "../ui/CustomIcoms"
import { ColorModeSelect } from '../../theme/ColorModeSelect'


export const LoginPage = () => {

  const [open, setOpen] = useState(false)


  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = {
      email: formData.get('email'),
      password: formData.get('password'),
    }
    console.log(data);
  }

  return (
    <AuthLayout title="Login" handleSubmit={handleSubmit}>
      <ColorModeSelect sx={{ position: 'fixed', top: '1rem', right: '1rem' }} />
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
        </FormControl>
        <FormControl>
        <FormLabel htmlFor="password"> Password </FormLabel>
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
          <Link
          component="button"
          type="button"
          onClick={handleClickOpen}
          variant="body2"
          sx={{ alignSelf: 'center' }}
          >
            Olvidaste tu contraseña?
          </Link>
        
          <div id="logger">
            <div className="logger-container" >
                <div className="logger-box">
                  <Button variant="contained" fullWidth>
                    Login
                  </Button>             
                </div>
              <div className="logger-box">             
                <Button
              fullWidth
              variant="contained"
              onClick={() => alert('Sign in with Facebook')}
              startIcon={<FacebookIcon />}
            >inicie con facebook</Button>             
              </div>
              <div className="logger-box">             
                <Button
              fullWidth
              variant="contained"
              onClick={() => alert('Sign in with Google')}
              startIcon={<GoogleIcon />}
            >Inicie con google</Button>              
              </div>
            </div>
          </div>
          <ForgotPassword open={open} handleClose={handleClose}/>
          <Link
          component={RouterLink}
          type="button"
          variant="body2"
          sx={{ alignSelf: 'center' }}
          to="/auth/register"
          >
            Crear una cuenta
          </Link>
    </AuthLayout>
  )
}
