import React from 'react'
import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'

import { Toolbar } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Typography from '@material-ui/core/Typography'

import PeopleApi, { PersonalData } from '../apis/people'
import { actions, AppState } from './modules'

type StateProps = ReturnType<typeof mapStateToProps>
type DispatchProps = ReturnType<typeof mapDispatchToProps>
type Props = StateProps & DispatchProps

const App = () => (
  <>
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
  </>
)

const mapStateToProps = (state: AppState) => ({ ...state })

type Dispatch = ThunkDispatch<any, void, any>
const mapDispatchToProps = (dispatch: Dispatch) => ({
  initialize: async () => dispatch(actions.fetchData()),
  postData: async (inputData: PersonalData) =>
    dispatch(actions.postData(inputData)),
  openDialog: () => dispatch(actions.openDialog()),
  closeDialog: () => dispatch(actions.closeDialog())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
