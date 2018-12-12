import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'

import App from './app'
import reducers from './modules'

const store = createStore(reducers, applyMiddleware(thunk))
const theme = createMuiTheme({
  palette: {
    type: 'dark'
  }
})

render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
)
