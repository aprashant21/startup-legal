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
import ListItemIcon from "@mui/material/ListItemIcon";
import {ListItemText} from "@mui/material";
import {DatePicker} from "@mui/lab";
import CustomInput from "../../views/components/CustomInput";
import {useTheme} from "@mui/material/styles";
import ListItem from "@mui/material/ListItem";
import ContractStickyTable from "../../views/components/tables/ContractStickyTable";

const Home = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const [anchorGroupBy, setAnchorGroupBy] = useState(null)
  const [anchorFilter, setAnchorFilter] = useState(null)
  const [dateFormat, setDateFormat] = useState(new Date())

  const handleSortingMenuClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleGroupByOpen = event => {
    setAnchorGroupBy(event.currentTarget)
  }

  const handleFilterOpen = event => {
    setAnchorFilter(event.currentTarget)
  }

  const handleSortingClose = () => {
    setAnchorEl(null)
  }

  const handleGroupByClose = () =>{
    setAnchorGroupBy(null);
  }

  const handleFilterClose = () =>{
    setAnchorFilter(null);
  }

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
                <Box sx={{display:'flex', gap:4}}>
                  <Button onClick={handleSortingMenuClick} variant={'contained'} startIcon={<Icon icon={'tabler:arrows-sort'} /> }>Sorting</Button>
                  <Button onClick={handleGroupByOpen} variant={'contained'} startIcon={<Icon icon={'tabler:box-multiple'} /> }>Group By</Button>
                  <Button onClick={handleFilterOpen} variant={'contained'} startIcon={<Icon icon={'tabler:adjustments-alt'} /> }>Filtering</Button>

                </Box>

              {/*sorting menu*/}
              <Menu
                keepMounted
                elevation={0}
                anchorEl={anchorEl}
                id='customized-menu'
                onClose={handleSortingClose}
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
                  <ListItemIcon>
                    <Icon icon='tabler:sort-ascending-2' fontSize={20} />
                  </ListItemIcon>
                  <ListItemText primary='Ascending' />
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <Icon icon='tabler:sort-descending-2' fontSize={20} />
                  </ListItemIcon>
                  <ListItemText primary='Descending' />
                </MenuItem>
              </Menu>

              {/*Group By Menu*/}
              <Menu
                keepMounted
                elevation={0}
                anchorEl={anchorGroupBy}
                id='customized-menu'
                onClose={handleGroupByClose}
                open={Boolean(anchorGroupBy)}
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
                  <ListItemIcon>
                    <Icon icon='tabler:calendar-due' fontSize={20} />
                  </ListItemIcon>
                  <ListItemText primary='By Date' />
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <Icon icon='tabler:brand-redux' fontSize={20} />
                  </ListItemIcon>
                  <ListItemText primary='By Contract Status' />
                </MenuItem>
              </Menu>

            </CardContent>
          </Card>
        </Paper>

        <Paper sx={{mt:4}}>
          {contracts.length === 0 ? <Card sx={{p: 10}}>
            <Typography align={'center'}>No Contracts to Show</Typography>
          </Card> :
            <Card>
            <CardHeader title='Contract List' />
            <ContractStickyTable />
            </Card>}
        </Paper>
      </Grid>

    </Grid>
  )
}

export default Home;
