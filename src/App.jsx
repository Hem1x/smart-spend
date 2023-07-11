import React from 'react'
import { BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store'
import FinanceApp from './FinanceApp'

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <FinanceApp />
      </BrowserRouter>
    </Provider>
  )
}

export default App