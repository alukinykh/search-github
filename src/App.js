import React, { Component } from 'react'
import { Provider } from 'react-redux'
import 'semantic-ui-css/semantic.min.css'
import store from './store'
import { WrapperSearch } from './components/wrapperSearch'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <WrapperSearch />
      </Provider>
    )
  }
}

export default App
