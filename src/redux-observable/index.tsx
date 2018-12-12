import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import { createEpicMiddleware } from 'redux-observable'

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'

import App from './app'
import epics from './epics'
import reducers, { AppAction } from './modules'

const epicMiddleware = createEpicMiddleware<AppAction>()
const store = createStore(reducers, applyMiddleware(epicMiddleware))
// epicMiddleware.run(epics)

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
