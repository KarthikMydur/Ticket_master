import React from 'react'
import { connect } from 'react-redux'
import { startSetDepartment, startRemoveDepartment } from '../../actions/departmentAction'
import {Link} from 'react-router-dom'

function DepartmentList(props){
   // console.log(props)
    if(props.department.length == 0){
        props.dispatch(startSetDepartment())
    }

    const handleRemove =(id)=>{
        const confirmRemove = window.confirm('are you sure!!')
        if(confirmRemove){
            props.dispatch(startRemoveDepartment(id))
        }
    }

    return(
        <div>
            <h2>Listing the Departments - {props.department.length} </h2>
            <ul>
                {
                    props.department.map(dept=>{
                        return(
                            <li key={dept._id}><Link to = {`/departments/${dept._id}`}>{dept.name}</Link><button onClick={()=>{
                                handleRemove(dept._id)
                            }}>Remove</button></li>
                        )
                    })
                }
            </ul>
            <Link to = '/departments/new'>Add department</Link>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return{
        department: state.department
    }
}
export default connect(mapStateToProps)(DepartmentList)