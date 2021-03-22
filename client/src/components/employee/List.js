import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import { startSetEmployees, startRemoveEmployee } from '../../actions/employeeAction'

function EmployeeList(props){
    if(props.employee.length==0){
        props.dispatch(startSetEmployees())
    }

    const handleRemove = (id) =>{
        const confirmRemove = window.confirm('are you sure!!')
        if(confirmRemove){
            props.dispatch(startRemoveEmployee(id))
        }
    }
    
    return(
        <div>
            <h2> Listing the employees - {props.employee.length} </h2>
            <ul>
                {
                    props.employee.map(emp=>{
                        return(
                            <li key={emp._id}><Link to = { `/employees/${emp._id}`}>{emp.name}</Link><button onClick={()=>{
                                handleRemove(emp._id)
                            }}>Remove</button></li>
                        )
                    })
                }
            </ul>
            <Link to ='/employees/new'>Add Employee</Link>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return{
        employee: state.employee
    }
}
export default connect(mapStateToProps)(EmployeeList)