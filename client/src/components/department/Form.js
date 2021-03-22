import React from 'react'
import { connect } from 'react-redux'
import { withRouter} from 'react-router-dom'
import { findDepartment } from '../../selectors/departmentSelector'

class DepartmentForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name: props.department ? props.department.name : " "
        }
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        const formData = {
            name: this.state.name
        }
        this.props.handleSubmit(formData)
        
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='name'>Name: </label>
                    <input type='text' value={this.state.name} onChange={this.handleChange} name='name' id='name' /><br/>
                    <input type='submit'/>

                </form>
            </div>
        )
    }
}
const mapStateToProps=(state, props)=>{
    const id = props.match.params.id
    return{
        department: findDepartment(state.department, id)
    }
}

export default withRouter(connect(mapStateToProps) (DepartmentForm))