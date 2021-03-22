import React from 'react'
import {connect} from 'react-redux'
import { findDepartment } from '../../selectors/departmentSelector'
import { Link } from 'react-router-dom'
function DepartmentShow(props) {
    //console.log(props)
    const {_id, name} = props.department || {}
    return(
        <div>
            {
                props.department ? (
                    <div>
                        <h2>department shown</h2>
                        <h3>{name} - {_id}</h3>
                    </div>
                ) : (
                    <div>
                        loading...!!
                    </div>
                )
            }
            <Link to = {`/departments/edit/${_id}`}>Edit</Link><br/>
            <Link to = '/departments'>Back</Link>
           
        </div>
    )
}

const mapStateToProps=(state, props)=>{
    const id = props.match.params.id
    return{
        department: findDepartment(state.department, id)
    }   
    
}
export default connect(mapStateToProps)(DepartmentShow)