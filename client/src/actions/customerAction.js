import axios from 'axios'

export const setCustomers = (customers) =>{
    return{
        type: 'SET_CUSTOMERS',
        payload: customers
    }
}

export const addCustomer = (customer) =>{
    
    return{
        type: 'ADD_CUSTOMERS',
        payload: customer
    }
}

export const startSetCustomers = () =>{
    return(dispatch) =>{
        axios.get('http://localhost:3030/customer')
            .then((response)=>{
                const customers = response.data
                dispatch(setCustomers(customers))

            })
    }
}

export const startAddCustomer = (FormData, redirect)=>{
    return(dispatch) =>{
        axios.post('http://localhost:3030/customer/new',FormData)
            .then((response) =>{
                const customer = response.data
                dispatch(addCustomer(customer))
                //redirect()
                
            })
    }
}

export const removeCustomer = (id)=>{
    return {
        type: 'REMOVE_CUSTOMER',
        payload: id
    }
}

export const startRemoveCustomer = (id) =>{
    return (dispatch) =>{
        axios.delete(`http://localhost:3030/customer/${id}`)
        .then((response)=>{
            const customer = response.data
            dispatch(removeCustomer(customer._id))
        }) 
    }
}

export const updateCustomer = (customer) =>{
    return {
        type: 'UPDATE_CUSTOMER',
        payload: customer
    }
}

export const startUpdateCustomer = (formData, id, redirect)=>{
    return (dispatch)=>{
        axios.put(`http://localhost:3030/customer/${id}`, formData)
        .then(response=>{
            const customer = response.data 
            dispatch(updateCustomer(customer))
            redirect()
        })
    }
}
