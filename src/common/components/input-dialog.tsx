import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import TextField from '@material-ui/core/TextField'
import React from 'react'

import { PersonalData } from 'common/apis/people'

export interface InputDialogProps {
  handleOk: (input: PersonalData) => void
  handleCancel: () => void
  isOpen: boolean
}

let name: string
let height: number
let weight: number
const inputName = (e: React.ChangeEvent<HTMLInputElement>) =>
  (name = e.currentTarget.value)
const inputHeight = (e: React.ChangeEvent<HTMLInputElement>) =>
  (height = Number(e.currentTarget.value))
const inputWeight = (e: React.ChangeEvent<HTMLInputElement>) =>
  (weight = Number(e.currentTarget.value))

const InputDialog = ({ handleOk, handleCancel, isOpen }: InputDialogProps) => {
  const handleSubscribe = () => handleOk({ name, height, weight })

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
          onChange={inputName}
        />
        <TextField
          autoFocus
          margin="dense"
          label="height"
          type="number"
          fullWidth
          onChange={inputHeight}
        />
        <TextField
          autoFocus
          margin="dense"
          label="weight"
          type="number"
          fullWidth
          onChange={inputWeight}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubscribe} color="primary">
          Subscribe
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default InputDialog
