import React from 'react'
import {connect} from 'react-redux'
import DepartmentForm from './Form'
import { startAddDepartment } from '../../actions/departmentAction'


function DepartmentNew(props){
    const handleSubmit=(formData)=>{
        const redirect = props.history.push('/departments')
        props.dispatch(startAddDepartment(formData, redirect))
    }
    return(
     <div>
         <h2>Add new department</h2>
         <DepartmentForm handleSubmit={handleSubmit}/>
     </div>   
    )
}
export default connect()(DepartmentNew)