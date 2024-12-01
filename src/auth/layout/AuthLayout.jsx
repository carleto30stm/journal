/* eslint-disable react/prop-types */
import { Box, Grid2, List, Typography } from "@mui/material"


export const AuthLayout = ({children, title = '', handleSubmit}) => {
  return (
    <Grid2
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent="center"
    sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
  > 
 
  <Grid2 
      className="box-shadow"
      xs={3}
      sx={{
        backgroundColor: 'white',
        padding: 3,
        borderRadius: 2,
        width: { sm: 450 }
      }}
    >
    <Typography variant="h5" sx={{ mb: 1 }}> { title } </Typography>
    <List>
    <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              gap: 2,
            }}
          >

    
    { children }  
          </Box>
    </List>
  </Grid2>
  </Grid2>


  )
}
