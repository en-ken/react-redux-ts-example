import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import TextField from '@material-ui/core/TextField'

import React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { actions, InputDialogState } from '../modules/input-dialog'

interface PropsFromParent {
  handleOk: () => void
  handleCancel: () => void
}
type StateProps = ReturnType<typeof mapStateToProps>
type DispatchProps = ReturnType<typeof mapDispatchToProps>
type InputDialogProps = StateProps & DispatchProps & PropsFromParent

const InputDialog = ({
  handleOk,
  handleCancel,
  isOpen,
  inputName,
  inputHeight,
  inputWeight
}: InputDialogProps) => {
  const handleInputName = (e: React.ChangeEvent<HTMLInputElement>) =>
    inputName(e.currentTarget.value)
  const handleInputHeight = (e: React.ChangeEvent<HTMLInputElement>) =>
    inputHeight(Number(e.currentTarget.value))
  const handleInputWeight = (e: React.ChangeEvent<HTMLInputElement>) =>
    inputWeight(Number(e.currentTarget.value))

  return (
    <Dialog
      open={isOpen}
      onClose={handleCancel}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle>Input Personal Data</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="name"
          fullWidth
          onChange={handleInputName}
        />
        <TextField
          autoFocus
          margin="dense"
          label="height"
          type="number"
          fullWidth
          onChange={handleInputHeight}
        />
        <TextField
          autoFocus
          margin="dense"
          label="weight"
          type="number"
          fullWidth
          onChange={handleInputWeight}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel} color="primary">
          Cancel
        </Button>
        <Button onClick={handleOk} color="primary">
          Subscribe
        </Button>
      </DialogActions>
    </Dialog>
  )
}

const mapStateToProps = (state: InputDialogState) => ({ ...state })
const mapDispatchToProps = (dispatch: Dispatch) => ({
  inputName: (name: string) => dispatch(actions.inputName(name)),
  inputHeight: (height: number) => dispatch(actions.inputHeight(height)),
  inputWeight: (weight: number) => dispatch(actions.inputWeight(weight)),
  openDialog: () => {
    dispatch(actions.refresh())
    dispatch(actions.openDialog())
  },
  closeDialog: () => dispatch(actions.closeDialog())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputDialog)
