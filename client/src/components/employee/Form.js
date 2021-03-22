import React from 'react'
import { connect } from 'react-redux'
class EmployeeForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name: " ",
            mobile: " ",
            email: " ",
            department: " "
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
            name: this.state.name,
            mobile: this.state.mobile,
            email: this.state.email,
            department: this.state.department
        }
        this.props.handleSubmit(formData)
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='name'>Name: </label>
                    <input type='text' value = {this.state.name} onChange={this.handleChange} id='name' name='name'/><br/>
                    <label htmlFor='mobile'>Mobile: </label>
                    <input type='text' value={this.state.mobile} onChange={this.handleChange} id='mobile' name='mobile' /><br/>
                    <label htmlFor='email'>Email: </label>
                    <input type='text' value={this.state.email} onChange={this.handleChange} id='email' name='email'/><br/>
                    <label htmlFor='department'>Department</label>
                    <input type='text' value={this.state.department} onChange={this.handleChange} id='department' name='department'/>
                    <br/>
                    <input type='submit'/>
                </form>
            </div>
        )
    }
}
export default connect() (EmployeeForm)