import React from 'react'
import {connect} from 'react-redux'
import { startSetCustomers, startRemoveCustomer } from '../../actions/customerAction'
import {Link} from 'react-router-dom'

function CustomerList (props) {

    const handleRemove =(id) => {
        const confirmRemove = window.confirm('are you sure')
        if(confirmRemove) {
            props.dispatch(startRemoveCustomer(id))
        }
    }
    if(props.customer.length == 0){
        props.dispatch(startSetCustomers())
    }
    return(
        <div>
            <h2>Listing customers - {props.customer.length} </h2>
            <ul>
                {
                   props.customer.map(cust=>{
                       return(
                           <li key={cust._id}><Link to={`/customers/${cust._id}`}>{cust.name}</Link><button onClick={() =>{
                               handleRemove(cust._id)
                           }}>Remove</button></li>
                       )
                   })
                }
            </ul>
            <Link to = '/customers/new'>Add customer</Link>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return {
        customer: state.customer
    }
}
export default connect(mapStateToProps)(CustomerList)