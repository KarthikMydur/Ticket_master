import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import {findEmployee} from '../../selectors/employeeSelector'
import { findDepartment } from '../../selectors/departmentSelector'

function EmployeeShow(props) {
    const {name, _id, email, mobile} = props.employee || { }
    console.log(props)
    return(
        <div>
            {
                (props.employee) ? (
                    <div>
                        <h2>EmployeeShown</h2>
                        <p>{name} - {email} - {mobile} - </p>
                        <Link to = '/employees'>Back</Link>
                    </div>

                ) :
                (
                    <div>
                        loading...!!
                    </div>
                )
            }

            
            
        </div>
    )
}

const mapStateToProps = (state,props) =>{
    const id = props.match.params.id
    
    return{
        employee: findEmployee(state.employee, id),
        department: state.department
        
    }
}
export default connect(mapStateToProps) (EmployeeShow)