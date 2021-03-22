import axios from 'axios'

export const setEmployees=(emp)=>{
    return{
        type: 'SET_EMPLOYEE',
        payload: emp
    }
}

export const startSetEmployees = () =>{
    return(dispatch)=>{
        axios.get('http://localhost:3030/employee')
        .then((response)=>{
            const emp = response.data
            dispatch(setEmployees(emp))
        })
    }
}

export const removeEmployee =(emp)=>{
    return {
        type: 'REMOVE_EMPLOYEE',
        payload: emp
    }
}

export const startRemoveEmployee = (id) =>{
    return (dispatch)=>{
        axios.delete(`http://localhost:3030/employee/${id}`)
        .then(response=>{
            const emp = response.data
            dispatch(removeEmployee(emp._id))
        })
    }
}



export const startAddEmployee = (formData) =>{
    console.log('startAddEmployee')
    return(dispatch)=>{
        axios.post('http://localhost:3030/employee/new',formData)
        .then(response=>{
            console.log(response.data)
        })
    }
}