import React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { Toolbar } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Typography from '@material-ui/core/Typography'

import PeopleApi, { PersonalData } from '../apis/people'
import InputDialog from '../components/input-dialog'
import { actions, AppState } from './modules'

type StateProps = ReturnType<typeof mapStateToProps>
type DispatchProps = ReturnType<typeof mapDispatchToProps>
type Props = StateProps & DispatchProps

class App extends React.PureComponent<Props> {
  constructor(props: Props) {
    super(props)
    props.initialize()
  }

  public render() {
    return (
      <>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit">
              React Redux TS Sample - redux-observable
            </Typography>
          </Toolbar>
        </AppBar>
        <Paper>
          {!this.props.isLoaded ? (
            <CircularProgress />
          ) : (
            <div>
              <Button variant="outlined" onClick={this.props.openDialog}>
                Add
              </Button>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Height</TableCell>
                    <TableCell>Weight</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.props.data.map((x, i) => (
                    <TableRow key={i}>
                      <TableCell>{x.name}</TableCell>
                      <TableCell>{x.height}</TableCell>
                      <TableCell>{x.weight}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </Paper>
        <InputDialog
          isOpen={this.props.isOpenDialog}
          handleOk={this.props.postData}
          handleCancel={this.props.closeDialog}
        />
      </>
    )
  }
}

const mapStateToProps = (state: AppState) => ({ ...state })
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
