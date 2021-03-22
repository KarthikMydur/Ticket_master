import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import customerReducer from '../reducers/customerReducer'
import departmentReducer from '../reducers/departmentReducer'
import employeeReducer from '../reducers/employeeReducer'


const configureStore = () =>{
    const store = createStore(combineReducers({
        customer: customerReducer,
        department: departmentReducer,
        employee: employeeReducer
        
    }),applyMiddleware(thunk))

    return store
}
export default configureStore   