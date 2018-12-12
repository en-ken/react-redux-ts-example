import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import TextField from '@material-ui/core/TextField'
import React from 'react'

export interface InputDialogProps {
  handleOk: () => void
  handleCancel: () => void
  isOpen: boolean
}

const InputDialog = ({ handleOk, handleCancel, isOpen }: InputDialogProps) => (
  <Dialog
    open={isOpen}
    onClose={handleCancel}
    aria-labelledby="form-dialog-title"
  >
    <DialogTitle>Input Personal Data</DialogTitle>
    <DialogContent>
      <TextField autoFocus margin="dense" label="name" fullWidth />
      <TextField
        autoFocus
        margin="dense"
        label="height"
        type="number"
        fullWidth
      />
      <TextField
        autoFocus
        margin="dense"
        label="weight"
        type="number"
        fullWidth
      />
    </DialogContent>
    <DialogActions>
      <Button onClick={handleOk} color="primary">
        Cancel
      </Button>
      <Button onClick={handleCancel} color="primary">
        Subscribe
      </Button>
    </DialogActions>
  </Dialog>
)
export default InputDialog
