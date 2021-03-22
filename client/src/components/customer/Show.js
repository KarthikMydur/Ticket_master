import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { findCustomer } from '../../selectors/customerSelector'

function CustomerShow(props) {
    const {_id, name, email, mobile} = props.customer || {}
    return (
        <div>
            {
                props.customer ? (
                    <div>
                    <h2>CustomerShown - {_id}</h2>
                    <p>{name} - {email} - {mobile}</p>
                    <Link to ={ `/customers/edit/${_id}`}>Edit</Link><br/>
                    <Link to = '/customers'>Back</Link>
                    </div>
                ) : (
                    <div>
                    loading...!!
                    </div>
                )
            }
           
        </div>
    )
}

const mapStateToProps = (state, props) =>{
    const id = props.match.params.id
    return {
        customer: findCustomer(state.customer, id)
    }
}
export default connect(mapStateToProps)(CustomerShow)