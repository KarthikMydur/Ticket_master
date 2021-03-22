import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from "react-redux"
import configureStore from './store/configureStore'
import App from './App'
import { startSetCustomers } from './actions/customerAction'
import { startSetDepartment } from './actions/departmentAction'
const store = configureStore()

// store.subscribe(()=>{
//     console.log(store.getState())
// })

//store.subscribe(()=>console.log(store.getState()))

store.dispatch(startSetCustomers())
store.dispatch(startSetDepartment())

const jsx = (
    <Provider store={store}>
        <App/>
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'))
