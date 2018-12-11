import React, { Dispatch } from 'react'

import { Toolbar } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Typography from '@material-ui/core/Typography'

import PeopleApi, { PersonalData } from '../apis/people'
import { actions } from './modules'

const theme = createMuiTheme({
  palette: {
    type: 'dark'
  }
})

const App = () => (
  <MuiThemeProvider theme={theme}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="title" color="inherit">
          React Redux TS Sample
        </Typography>
      </Toolbar>
    </AppBar>
    <Paper>
      <div>
        <Button variant="outlined">Add</Button>
        <Button variant="outlined" color="secondary">
          Delete
        </Button>
      </div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Last Name</TableCell>
            <TableCell>First Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>foo</TableCell>
            <TableCell>bar</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>baz</TableCell>
            <TableCell>qux</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  </MuiThemeProvider>
)

const mapDispatchToProps = (dispatch: Dispatch) => ({
  initialize: async () => {
    dispatch(actions.startLoading())
    const { data } = await PeopleApi.get()
    dispatch(actions.fetchDataSuccess(data))
    dispatch(actions.finishLoading())
  },
  postData: async (inputData: PersonalData) => {
    dispatch(actions.startLoading())
    await PeopleApi.post(inputData)
    const { data } = await PeopleApi.get()
    dispatch(actions.fetchDataSuccess(data))
    dispatch(actions.finishLoading())
  },
  openDialog: () => dispatch(actions.openDialog()),
  closeDialog: () => dispatch(actions.closeDialog())
})

export default App
