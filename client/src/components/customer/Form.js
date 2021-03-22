import React from 'react'
import { withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
import { findCustomer } from '../../selectors/customerSelector'


class CustomerForm extends React.Component{
     constructor(props){
         console.log('customer form constructor', props)
        super(props)
        this.state={
            name: props.customer ? props.customer.name: " ",
            email: props.customer ? props.customer.email: " ",
            mobile: props.customer ? props.customer.mobile:" "
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
             email: this.state.email,
             mobile: this.state.mobile
         }
         this.props.handleSubmit(formData)
     }
    render(){
        return (
            <div>
               <form onSubmit={this.handleSubmit}>
                    <label htmlFor='name'>Name: </label>
                    <input type='text' value={this.state.name} name='name' id='id' onChange={this.handleChange}/>
                    <br/>
                    <label htmlFor='email'>Email</label>
                    <input type='text' value={this.state.email} name='email' id='email' onChange={this.handleChange}/>
                    <br/>
                    <label htmlFor='mobile'>Mobile: </label>
                    <input type='mobile' value={this.state.mobile} name='mobile' id='mobile' onChange={this.handleChange}/>
                    <br/>
                    <input type='submit'/>
               </form>
            </div>
        )
    }
}

const mapStateToProps =(state, props)=>{
   // console.log('form', props)
    const id = props.match.params.id
    return{
        customer : findCustomer(state.customer, id)
    }
}
export default withRouter(connect(mapStateToProps) (CustomerForm))