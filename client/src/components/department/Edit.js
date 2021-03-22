import React from 'react'
import {connect} from 'react-redux'
import DepartmentForm from './Form'
import { startUpdateDepartment } from '../../actions/departmentAction'

function DepartmentEdit(props) {

    const handleSubmit=(formData)=>{
        const id = props.match.params.id
        const redirect=()=> props.history.push('/departments')
        props.dispatch(startUpdateDepartment(formData, id, redirect))
    }
    return(
        <div>
            <h2>DepartmentEdit</h2>
            <DepartmentForm handleSubmit={handleSubmit}/>
        </div>
    )
}
export default connect() (DepartmentEdit)