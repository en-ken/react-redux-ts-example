import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, compose, createStore } from 'redux'
import { createEpicMiddleware } from 'redux-observable'

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'

import App from './app'
import epics from './epics'
import reducers, { AppAction } from './modules'

const epicMiddleware = createEpicMiddleware<AppAction>()
const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(epicMiddleware))
)
epicMiddleware.run(epics)

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
