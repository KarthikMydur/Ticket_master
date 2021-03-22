import React from 'react'
import {connect} from 'react-redux'
import EmployeeForm from './Form'
import { startAddEmployee } from '../../actions/employeeAction'

function EmployeeNew(props){
    const handleSubmit=(formData)=>{
        //console.log(formData)
        const redirect = props.history.push('/employees')
        props.dispatch(startAddEmployee(formData, redirect))
        
    }
    return(
        <div>
            <EmployeeForm handleSubmit={handleSubmit}/>
        </div>
    )
}
export default connect()(EmployeeNew)