// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import CustomAutocomplete from "../../@core/components/mui/autocomplete";
import {contracts} from "../../utils/contracts";
import CustomTextField from "../../@core/components/mui/text-field";
import Button from "@mui/material/Button";
import {Icon} from "@iconify/react";
import Menu from "@mui/material/Menu";
import {useState} from "react";
import MenuItem from "@mui/material/MenuItem";

const Home = () => {
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const sortingOptions = [
    {
      title:'Filter By Date',

    }
  ]

  return (
    <Grid container spacing={6}>

      <Grid item xs={12}>
        <Typography variant="h1" align="center" gutterBottom>
          Welcome to StartUpLegal
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Paper>
          <Card>
            <CardHeader
              title={<Typography variant={'h4'}>Filtering, Finding and Sorting</Typography>}
              subheader={<Typography variant='subtitle2'>Find Your Specific Contract From Here...</Typography> }
            />
            {/*<CardContent>*/}
            {/*  <Box sx={{display:'flex'}}>*/}
            {/*    <CustomAutocomplete*/}
            {/*      sx={{ width: 250 }}*/}
            {/*      options={contracts}*/}
            {/*      id='autocomplete-custom'*/}
            {/*      getOptionLabel={contract => contract.title || ''}*/}
            {/*      renderInput={params => <CustomTextField {...params} label='Sorting' />}*/}
            {/*    />*/}
            {/*  </Box>*/}
            {/*</CardContent>*/}

            <CardContent>
                <Box sx={{display:'flex', gap:2}}>
                  <Button onClick={handleClick} variant={'contained'} startIcon={<Icon icon={'tabler:adjustments-horizontal'} /> }>Sorting</Button>
                </Box>
              <Menu
                keepMounted
                elevation={0}
                anchorEl={anchorEl}
                id='customized-menu'
                onClose={handleClose}
                open={Boolean(anchorEl)}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center'
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center'
                }}
              >
                <MenuItem>
                  Hello WORD
                </MenuItem>
              </Menu>
            </CardContent>

          </Card>
        </Paper>
      </Grid>




    </Grid>
  )
}

export default Home;
